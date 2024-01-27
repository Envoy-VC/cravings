import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserCart } from '~/lib/supabase/user';
import RealTimeAddToCart from './realtime';
import type { Variant } from '..';

import VariantModal from './modal';

interface Props {
  itemId: string;
  variants: Variant[];
}

export interface CartItem {
  itemId: string;
  variant_name: string;
  variant_price: number;
  quantity: number;
}

const AddToCart = async ({ itemId, variants }: Props) => {
  const { userId } = auth();
  const cart = await getUserCart(userId ?? '');

  const items = JSON.parse(JSON.stringify(cart?.items ?? '{}')) as {
    items: CartItem[];
  };

  if (variants.length === 1) {
    const count =
      items.items.find(
        (item) =>
          item.itemId === itemId &&
          item.variant_name === variants[0]!.name &&
          item.variant_price === variants[0]!.price
      )?.quantity ?? 0;
    return (
      <RealTimeAddToCart
        count={count}
        itemId={itemId}
        variant_name={variants[0]!.name}
        variant_price={variants[0]!.price}
      />
    );
  } else {
    return (
      <div>
        <VariantModal itemId={itemId} variants={variants} items={items.items} />
      </div>
    );
  }
};

export default AddToCart;
