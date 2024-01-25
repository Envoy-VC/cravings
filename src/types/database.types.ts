export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      MenuItem: {
        Row: {
          allergens: string | null
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          image: string | null
          is_vegetarian: boolean | null
          item_name: string | null
          owner: string | null
          price: number | null
          restaurant_id: string | null
          updated_at: string | null
        }
        Insert: {
          allergens?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_vegetarian?: boolean | null
          item_name?: string | null
          owner?: string | null
          price?: number | null
          restaurant_id?: string | null
          updated_at?: string | null
        }
        Update: {
          allergens?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image?: string | null
          is_vegetarian?: boolean | null
          item_name?: string | null
          owner?: string | null
          price?: number | null
          restaurant_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "MenuItem_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "Restaurant"
            referencedColumns: ["owner"]
          },
          {
            foreignKeyName: "MenuItem_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      Restaurant: {
        Row: {
          active: boolean | null
          address: string | null
          city: string | null
          created_at: string | null
          cuisine: Database["public"]["Enums"]["Cuisines"][] | null
          description: string | null
          email: string | null
          id: string
          image: string | null
          name: string | null
          opening_hours_end: string | null
          opening_hours_start: string | null
          owner: string
          phone_number: number | null
          postal_code: number | null
          state: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          city?: string | null
          created_at?: string | null
          cuisine?: Database["public"]["Enums"]["Cuisines"][] | null
          description?: string | null
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
          opening_hours_end?: string | null
          opening_hours_start?: string | null
          owner: string
          phone_number?: number | null
          postal_code?: number | null
          state?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          address?: string | null
          city?: string | null
          created_at?: string | null
          cuisine?: Database["public"]["Enums"]["Cuisines"][] | null
          description?: string | null
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
          opening_hours_end?: string | null
          opening_hours_start?: string | null
          owner?: string
          phone_number?: number | null
          postal_code?: number | null
          state?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      User: {
        Row: {
          activeOrders: string[]
          cart: string[]
          created_at: string
          id: string
        }
        Insert: {
          activeOrders?: string[]
          cart?: string[]
          created_at?: string
          id: string
        }
        Update: {
          activeOrders?: string[]
          cart?: string[]
          created_at?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      Cuisines:
        | "Afghani"
        | "American"
        | "Arabian"
        | "Asian"
        | "Bakery"
        | "Beverages"
        | "Biryani"
        | "Burgers"
        | "Cafe"
        | "Cake_and_Pastries"
        | "Chaat"
        | "Chinise"
        | "Continental"
        | "Desserts"
        | "Fast_food"
        | "Goan"
        | "Grill"
        | "Gujarati"
        | "Healthy_Food"
        | "Hyderabadi"
        | "Ice_Cream"
        | "Ice_Cream_Cakes"
        | "Indian"
        | "Italian"
        | "Italian_American"
        | "Juices"
        | "Kebabs"
        | "Kerla"
        | "Maharashtrian"
        | "Mexican"
        | "Momos"
        | "Mughlai"
        | "North_Indian"
        | "Paan"
        | "Pan_Asian"
        | "Pastaas"
        | "Pizzas"
        | "Punjabi"
        | "Rolls_and_Wraps"
        | "Salads"
        | "Seafood"
        | "Snacks"
        | "South_Indian"
        | "Street_Food"
        | "Sushi"
        | "Sweets"
        | "Tandoor"
        | "Thai"
        | "Waffle"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
