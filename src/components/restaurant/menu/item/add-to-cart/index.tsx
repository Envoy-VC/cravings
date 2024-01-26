import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserCart } from '~/lib/supabase/user';
import RealTimeAddToCart from './realtime';

interface Props {
  itemId: string;
  variant_name: string;
  variant_price: number;
}

export interface CartItem {
  itemId: string;
  variant_name: string;
  variant_price: number;
  quantity: number;
}

const AddToCart = async ({ itemId, variant_name, variant_price }: Props) => {
  const { userId } = auth();
  const cart = await getUserCart(userId ?? '');

  const items = JSON.parse(JSON.stringify(cart?.items ?? '{}')) as {
    items: CartItem[];
  };

  // Get Count of items with itemId
  const count =
    items.items.find((item) => item.itemId === itemId)?.quantity ?? 0;

  return (
    <RealTimeAddToCart
      count={count}
      itemId={itemId}
      variant_name={variant_name}
      variant_price={variant_price}
    />
  );
};

export default AddToCart;
