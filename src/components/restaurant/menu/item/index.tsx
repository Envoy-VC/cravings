import React from 'react';
import Image from 'next/image';
import type { MenuItem } from '~/types';

import { FaCartPlus } from 'react-icons/fa';
import { Button } from '~/components/ui/button';

const Item = ({
  id,
  image,
  item_name,
  description,
  is_vegetarian,
  price,
}: MenuItem) => {
  return (
    <div className='flex h-full select-none flex-row justify-between gap-4'>
      <div className='flex flex-row gap-3'>
        <Image
          src={image ?? ''}
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
        <Button variant='primary' size='icon'>
          <FaCartPlus className='text-xl text-gray-50' />
        </Button>
        <div className='text-lg font-semibold'>₹{price}</div>
      </div>
    </div>
  );
};

export default Item;