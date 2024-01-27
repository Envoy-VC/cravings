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
      menu_categories: {
        Row: {
          available_from: string
          available_to: string
          category_id: string
          category_name: string
          created_at: string
          order: number
          owner: string
          restaurant_id: string
          updated_at: string
        }
        Insert: {
          available_from: string
          available_to: string
          category_id?: string
          category_name?: string
          created_at?: string
          order: number
          owner: string
          restaurant_id: string
          updated_at?: string
        }
        Update: {
          available_from?: string
          available_to?: string
          category_id?: string
          category_name?: string
          created_at?: string
          order?: number
          owner?: string
          restaurant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "menu_categories_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "menu_categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      menu_items: {
        Row: {
          category_id: string
          created_at: string
          description: string
          id: string
          "is_ vegetarian": boolean
          is_available: boolean
          item_image: string
          item_name: string
          owner: string
          restaurant_id: string
          updated_at: string
          variants: Json
        }
        Insert: {
          category_id: string
          created_at?: string
          description?: string
          id?: string
          "is_ vegetarian"?: boolean
          is_available: boolean
          item_image?: string
          item_name?: string
          owner: string
          restaurant_id: string
          updated_at?: string
          variants: Json
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string
          id?: string
          "is_ vegetarian"?: boolean
          is_available?: boolean
          item_image?: string
          item_name?: string
          owner?: string
          restaurant_id?: string
          updated_at?: string
          variants?: Json
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "menu_categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "menu_items_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "menu_items_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      restaurant: {
        Row: {
          active: boolean
          city: string
          closing_hours: string
          created_at: string
          cuisine_type: string[]
          description: string
          id: string
          image: string
          latitude: number
          longitude: number
          minimum_order_amount: number
          name: string
          opening_hours: string
          owner_id: string
          postal_code: string
          state: string
          street_address: string
          updated_at: string
          upi_id: string
          website_url: string
        }
        Insert: {
          active?: boolean
          city?: string
          closing_hours: string
          created_at?: string
          cuisine_type?: string[]
          description?: string
          id?: string
          image?: string
          latitude?: number
          longitude?: number
          minimum_order_amount?: number
          name?: string
          opening_hours: string
          owner_id: string
          postal_code?: string
          state?: string
          street_address?: string
          updated_at?: string
          upi_id?: string
          website_url?: string
        }
        Update: {
          active?: boolean
          city?: string
          closing_hours?: string
          created_at?: string
          cuisine_type?: string[]
          description?: string
          id?: string
          image?: string
          latitude?: number
          longitude?: number
          minimum_order_amount?: number
          name?: string
          opening_hours?: string
          owner_id?: string
          postal_code?: string
          state?: string
          street_address?: string
          updated_at?: string
          upi_id?: string
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_addresses: {
        Row: {
          address_id: string
          address_line1: string
          address_line2: string
          city: string
          created_at: string
          is_default: boolean
          postal_code: string
          state: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address_id?: string
          address_line1?: string
          address_line2?: string
          city?: string
          created_at?: string
          is_default?: boolean
          postal_code?: string
          state?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address_id?: string
          address_line1?: string
          address_line2?: string
          city?: string
          created_at?: string
          is_default?: boolean
          postal_code?: string
          state?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_carts: {
        Row: {
          cart_id: string
          created_at: string
          items: Json
          restaurant_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cart_id?: string
          created_at?: string
          items: Json
          restaurant_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cart_id?: string
          created_at?: string
          items?: Json
          restaurant_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_carts_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_orders: {
        Row: {
          address_id: string
          created_at: string
          is_accepted: boolean
          is_paid: boolean
          items_ordered: Json
          order_id: string
          order_status: string
          order_total: number
          payment_mode: string
          restaurant_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address_id: string
          created_at?: string
          is_accepted?: boolean
          is_paid?: boolean
          items_ordered: Json
          order_id?: string
          order_status?: string
          order_total: number
          payment_mode?: string
          restaurant_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address_id?: string
          created_at?: string
          is_accepted?: boolean
          is_paid?: boolean
          items_ordered?: Json
          order_id?: string
          order_status?: string
          order_total?: number
          payment_mode?: string
          restaurant_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_orders_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "user_addresses"
            referencedColumns: ["address_id"]
          },
          {
            foreignKeyName: "user_orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          favourite_restaurants: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          favourite_restaurants?: string[]
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          favourite_restaurants?: string[]
          updated_at?: string
          user_id?: string
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
