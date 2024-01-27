import React from 'react';

import { auth } from '@clerk/nextjs';

import { getUserCart } from '~/lib/supabase/user';
import { getItemDetails, getRestaurantById } from '~/lib/supabase/restaurants';

import { Checkout } from '~/components/account';
import Item from '~/components/restaurant/menu/item';
import type { MenuItem } from '~/types';
import Image from 'next/image';

export const revalidate = 5;
export interface UserCartItem {
  itemId: string;
  quantity: number;
  variant_name: string;
  variant_price: number;
}

const ItemPill = async ({ itemId }: { itemId: string }) => {
  const item = (await getItemDetails(itemId)) as MenuItem;
  return (
    <div>
      <Item {...item} />
    </div>
  );
};

const RestaurantCard = async ({ id }: { id: string }) => {
  const { name, image, street_address } = await getRestaurantById(id);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center gap-3 pb-2'>
        <Image
          src={image}
          alt={name}
          className='h-10 w-10 rounded-full'
          width={96}
          height={96}
        />
        <div className='flex flex-col'>
          <div className='font-semibold'>{name}</div>
          <div className='text-sm text-gray-400'>{street_address}</div>
        </div>
      </div>
      <div className='my-4 w-full border-[1px] border-gray-200' />
    </div>
  );
};
const Cart = async () => {
  const { userId } = auth();
  const cart = await getUserCart(userId!);
  const { items } = JSON.parse(JSON.stringify(cart.items)) as {
    items: UserCartItem[];
  };
  if (cart.restaurant_id)
    return (
      <div className='w-full p-5'>
        <RestaurantCard id={cart.restaurant_id} />
        <div className='flex flex-col gap-3'>
          {items.map((item) => (
            <ItemPill key={item.itemId} itemId={item.itemId} />
          ))}
        </div>
        <div className='mt-5'>
          <Checkout cart={cart} />
        </div>
      </div>
    );
};

export default Cart;
