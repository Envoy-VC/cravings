'use client';

import React, { useOptimistic } from 'react';

import { useUser } from '@clerk/nextjs';
import { FaCartPlus } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { addToCart, removeFromCart } from '~/lib/supabase/user';

import type { CartItem } from '.';
import { usePathname } from 'next/navigation';

import { FaPlus, FaMinus } from 'react-icons/fa6';

interface Props {
  itemId: string;
  count: number;
  variant_name: string;
  variant_price: number;
  restaurant_id: string;
  setTotalItems?: React.Dispatch<React.SetStateAction<number>>;
}

const RealTimeAddToCart = ({
  itemId,
  count: serverCount,
  variant_name,
  variant_price,
  restaurant_id,
  setTotalItems,
}: Props) => {
  const { user } = useUser();
  const pathName = usePathname();

  const [count, setCount] = React.useState<number>(serverCount);
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    count,
    (state, newState: number) => {
      return newState;
    }
  );
  const [isAdding, setIsAdding] = React.useState<boolean>(false);
  const updateCart = async (type: 'add' | 'remove') => {
    try {
      setIsAdding(true);
      let res;
      if (type === 'add') {
        setOptimisticCount(optimisticCount + 1);
        if (setTotalItems) setTotalItems((prev) => prev + 1);
        res = await addToCart(
          user?.id ?? '',
          itemId,
          restaurant_id,
          variant_name,
          variant_price
        );
      } else {
        setOptimisticCount(optimisticCount - 1);
        if (setTotalItems) setTotalItems((prev) => prev - 1);
        res = await removeFromCart(
          user?.id ?? '',
          itemId,
          restaurant_id,
          variant_name,
          variant_price
        );
      }

      const { data, error } = res;
      if (error) throw error;
      if (!data) return;
      const cart = data[0]!;
      const items = JSON.parse(JSON.stringify(cart?.items ?? '{}')) as {
        items: CartItem[];
      };

      const count =
        items.items.find(
          (item) =>
            item.itemId === itemId &&
            item.variant_name === variant_name &&
            item.variant_price === variant_price
        )?.quantity ?? 0;

      setCount(count);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className='flex flex-col'>
      {count === 0 ? (
        <Button
          variant='primary'
          size='sm'
          className='flex flex-row gap-2'
          onClick={() => updateCart('add')}
          disabled={isAdding}
        >
          <FaCartPlus className='text-sm text-gray-50' />
          Add
        </Button>
      ) : pathName === '/account/cart' ? (
        <div className='font-semibold'>x{optimisticCount}</div>
      ) : (
        <div className='flex flex-row items-center gap-2'>
          <div className='cursor-pointer' onClick={() => updateCart('add')}>
            <FaPlus className='text-primary' />
          </div>
          <div className='font-semibold'>{optimisticCount}</div>
          <div className='cursor-pointer' onClick={() => updateCart('remove')}>
            <FaMinus className='text-primary' />
          </div>
          <div
            className='h-2 w-2 animate-pulse rounded-full'
            style={{ backgroundColor: isAdding ? '#F87171' : 'transparent' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default RealTimeAddToCart;
