import React from 'react';
import Image from 'next/image';
import type { MenuItem } from '~/types';

import AddToCart from './add-to-cart';

import { auth, currentUser } from '@clerk/nextjs';

const Item = async ({
  id,
  item_image,
  item_name,
  description,
  variants,
}: MenuItem) => {
  const { userId } = auth();
  const user = await currentUser();
  const item_variant = JSON.parse(JSON.stringify(variants)) as Record<
    string,
    {
      name: string;
      price: number;
    }
  >;
  return (
    <div className='flex h-full select-none flex-row justify-between gap-4'>
      <div className='flex flex-row gap-3'>
        <Image
          src={item_image ?? ''}
          alt={item_name ?? id}
          width={100}
          height={100}
          objectFit='cover'
          className='aspect-square rounded-lg object-cover'
        />
        <div className='flex flex-col gap-2'>
          <div className='text-lg font-semibold'>{item_name}</div>
          <div className='max-w-xs text-xs text-neutral-500 sm:text-sm'>
            {description}
          </div>
        </div>
      </div>
      <div className='flex min-h-max flex-col items-center justify-around'>
        {user && user.publicMetadata.role === 'user' && (
          <AddToCart
            itemId={id}
            variant_name={item_variant?.['1']?.name ?? ''}
            variant_price={item_variant?.['1']?.price ?? 0}
          />
        )}
        <div className='text-lg font-semibold'>
          ₹{item_variant?.['1']?.price ?? ''}
        </div>
      </div>
    </div>
  );
};

export default Item;
