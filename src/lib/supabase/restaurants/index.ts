import createSupabaseServerClient from '../server';

export const getRestaurants = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from('Restaurant').select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const getRestaurantById = async (id: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('Restaurant')
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
