/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server';

import createSupabaseServerClient from '../server';
import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';

export const getUserCart = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('user_carts')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  const cart = data[0];

  if (!cart) {
    throw new Error('Cart not found');
  }

  return cart;
};

export const addToCart = async (
  userId: string,
  itemId: string,
  variant_name: string,
  variant_price: number
) => {
  const supabase = createSupabaseServerClient();
  const cart = await getUserCart(userId);

  const prevCart = JSON.parse(JSON.stringify(cart?.items)) as {
    items: CartItem[];
  };

  // Case 1: Item already present in the cart
  let isPresent = false;
  for (const item of prevCart.items) {
    if (
      item.itemId === itemId &&
      item.variant_name === variant_name &&
      item.variant_price === variant_price
    ) {
      item.quantity += 1;
      isPresent = true;
    }
  }

  // Case 2: Item not present in the cart
  if (!isPresent) {
    prevCart.items.push({
      itemId,
      variant_name,
      variant_price,
      quantity: 1,
    });
  }

  const { data, error } = await supabase
    .from('user_carts')
    .update({
      items: prevCart as any,
    })
    .eq('user_id', userId)
    .select('*');

  return {
    data,
    error,
  };
};

export const removeFromCart = async (
  userId: string,
  itemId: string,
  variant_name: string,
  variant_price: number
) => {
  const supabase = createSupabaseServerClient();
  const cart = await getUserCart(userId);

  const prevCart = JSON.parse(JSON.stringify(cart?.items)) as {
    items: CartItem[];
  };

  for (const item of prevCart.items) {
    if (
      item.itemId === itemId &&
      item.variant_name === variant_name &&
      item.variant_price === variant_price
    ) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        const index = prevCart.items.indexOf(item);
        prevCart.items.splice(index, 1);
      }
    }
  }

  const { data, error } = await supabase
    .from('user_carts')
    .update({
      items: prevCart as any,
    })
    .eq('user_id', userId)
    .select('*');

  return {
    data,
    error,
  };
};
