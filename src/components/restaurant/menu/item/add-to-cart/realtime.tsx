'use client';

import React from 'react';

import { useUser } from '@clerk/nextjs';
import { FaCartPlus } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { addToCart, removeFromCart } from '~/lib/supabase/user';

import createSupabaseClient from '~/lib/supabase/client';
import type { CartItem } from '.';
import type { UserCart } from '~/types';

import { FaPlus, FaMinus } from 'react-icons/fa6';

interface Props {
  itemId: string;
  count: number;
  variant_name: string;
  variant_price: number;
}

const RealTimeAddToCart = ({
  itemId,
  count: serverCount,
  variant_name,
  variant_price,
}: Props) => {
  const [count, setCount] = React.useState<number>(serverCount);
  const { user } = useUser();
  const supabase = createSupabaseClient();

  React.useEffect(() => {
    const channel = supabase
      .channel(`realtime cart count ${itemId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_carts',
          filter: 'user_id=eq.' + user?.id,
        },
        (payload) => {
          const newData = payload.new as UserCart;
          const cartItems = JSON.parse(JSON.stringify(newData?.items)) as {
            items: CartItem[];
          };

          // Find Item with ItemId and get quantity
          const newCount =
            cartItems.items.find(
              (item) =>
                item.itemId === item.itemId &&
                item.variant_name === variant_name &&
                item.variant_price === variant_price
            )?.quantity ?? 0;

          setCount(newCount);
        }
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className='flex flex-col'>
      {count === 0 ? (
        <Button
          variant='primary'
          size='icon'
          onClick={() =>
            addToCart(user?.id ?? '', itemId, variant_name, variant_price)
          }
        >
          <FaCartPlus className='text-xl text-gray-50' />
        </Button>
      ) : (
        <div className='flex flex-row items-center gap-2'>
          <div
            className='cursor-pointer rounded-lg bg-slate-100 p-1'
            onClick={() =>
              addToCart(user?.id ?? '', itemId, variant_name, variant_price)
            }
          >
            <FaPlus className='text-xl text-primary' />
          </div>
          <div className='text-lg font-semibold'>{count}</div>
          <div
            className='cursor-pointer rounded-lg bg-slate-100 p-1'
            onClick={() =>
              removeFromCart(
                user?.id ?? '',
                itemId,
                variant_name,
                variant_price
              )
            }
          >
            <FaMinus className='text-xl text-primary' />
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeAddToCart;
