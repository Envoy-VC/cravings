'use server';

import createSupabaseServerClient from '../server';

export const getUserCart = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('User')
    .select('*')
    .eq('id', userId);

  if (error) {
    throw error;
  }
  const user = data[0];
  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }
  return user.cart;
};

export const addToCart = async (userId: string, itemId: string) => {
  const supabase = createSupabaseServerClient();
  const cart = await getUserCart(userId);

  const newCart = [...cart, itemId];
  const res = await supabase
    .from('User')
    .update({
      cart: newCart,
    })
    .eq('id', userId)
    .select();

  return JSON.stringify(res.data);
};

export const removeFromCart = async (userId: string, itemId: string) => {
  const supabase = createSupabaseServerClient();
  const cart = await getUserCart(userId);

  // remove only one item of itemId
  const itemcount = cart.filter((id) => id === itemId).length;

  const newCart = [
    ...cart.filter((id) => id !== itemId),
    ...Array<string>(itemcount - 1).fill(itemId),
  ];

  const res = await supabase
    .from('User')
    .update({
      cart: newCart,
    })
    .eq('id', userId)
    .select();

  return JSON.stringify(res.data);
};
