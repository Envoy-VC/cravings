/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server';

import { cache } from 'react';

import createSupabaseServerClient from '../server';
import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';
import type { AddressForm } from '~/components/account/add-address';
import type { Restaurant } from '~/types';
import type { Json } from '~/types/database';

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

export const getRestaurantByOwner = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('restaurant')
    .select('*')
    .eq('owner_id', userId);

  if (error) {
    throw error;
  }

  return data.at(0) as Restaurant;
};

interface CreateOrderArgs {
  user_id: string;
  restaurant_id: string;
  address_id: string;
  items_ordered: Json;
  order_total: number;
  payment_mode: 'cod' | 'upi';
  is_paid: boolean;
}
export const createOrder = async ({
  user_id,
  restaurant_id,
  address_id,
  items_ordered,
  order_total,
  payment_mode,
  is_paid,
}: CreateOrderArgs) => {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.from('user_orders').insert([
    {
      user_id,
      restaurant_id,
      address_id,
      is_accepted: false,
      items_ordered: items_ordered as any,
      order_total,
      payment_mode,
      is_paid,
      order_status: 'is_pending',
    },
  ]);

  // clear user cart
  await supabase
    .from('user_carts')
    .update({
      items: {
        items: [],
      },
      restaurant_id: null,
    })
    .eq('user_id', user_id);

  if (error) {
    throw error;
  }

  return {
    success: true,
  };
};
