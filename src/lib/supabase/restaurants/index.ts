import createSupabaseServerClient from '../server';

export const getRestaurants = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from('restaurant').select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const getRestaurantById = async (id: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('restaurant')
    .select('*')
    .eq('id', id);

  if (error) {
    throw error;
  }

  const restaurant = data[0];

  if (!restaurant) {
    throw new Error(`Restaurant with id ${id} not found`);
  }

  return restaurant;
};

export const getRestaurantMenuCategories = async (restaurant_id: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('menu_categories')
    .select('*')
    .eq('restaurant_id', restaurant_id);

  if (error) {
    throw error;
  }

  return data;
};

export const getCategoryItems = async (category_id: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('category_id', category_id);

  if (error) {
    throw error;
  }

  return data;
};
