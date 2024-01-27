import type { Database } from './database';

export type Restaurant = Database['public']['Tables']['restaurant']['Row'];
export type MenuCategory =
  Database['public']['Tables']['menu_categories']['Row'];
export type MenuItem = Database['public']['Tables']['menu_items']['Row'];

export type User = Database['public']['Tables']['users']['Row'];
export type UserCart = Database['public']['Tables']['user_carts']['Row'];
export type UserAddress = Database['public']['Tables']['user_addresses']['Row'];

export type Order = Database['public']['Tables']['user_orders']['Row'];

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}
