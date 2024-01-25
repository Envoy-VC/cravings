import type { Database } from './database.types';

export type Restaurant = Database['public']['Tables']['Restaurant']['Row'];

export type MenuItem = Database['public']['Tables']['MenuItem']['Row'];
