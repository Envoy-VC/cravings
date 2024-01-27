/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server';

import { cache } from 'react';

import createSupabaseServerClient from '../server';
import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';
import type { AddressForm } from '~/components/account/add-address';

export const getUserCart = cache(async (userId: string) => {
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
});

export const addToCart = async (
  userId: string,
  itemId: string,
  restaurant_id: string,
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

  let newRestaurantId;

  if (!cart.restaurant_id) {
    newRestaurantId = restaurant_id;
  } else {
    if (cart.restaurant_id !== restaurant_id) {
      throw new Error('Cannot add items from different restaurants');
    }
    newRestaurantId = cart.restaurant_id;
  }

  const { data, error } = await supabase
    .from('user_carts')
    .update({
      restaurant_id: newRestaurantId,
      items: {
        items: prevCart.items as any,
      },
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
  restaurant_id: string,
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

  let newRestaurantId;

  if (prevCart.items.length === 0) {
    newRestaurantId = null;
  } else {
    newRestaurantId = restaurant_id;
  }

  const { data, error } = await supabase
    .from('user_carts')
    .update({
      restaurant_id: newRestaurantId,
      items: {
        items: prevCart.items as any,
      },
    })
    .eq('user_id', userId)
    .select('*');

  return {
    data,
    error,
  };
};

export const getUserAddress = cache(async (userId: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('user_addresses')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data ?? [];
});

export const getUserAddresses = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('user_addresses')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data ?? [];
};

export const addAddress = async (userId: string, data: AddressForm) => {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from('user_addresses').insert([
    {
      user_id: userId,
      ...data,
    },
  ]);

  if (error) {
    throw error;
  }
};
