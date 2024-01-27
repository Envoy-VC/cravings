'use client';

import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

import { usePathname } from 'next/navigation';

import { Button } from '~/components/ui/button';

import RealTimeAddToCart from '../realtime';
import type { Variant } from '../..';
import type { CartItem } from '..';
import { FaPlus } from 'react-icons/fa';

interface Props {
  itemId: string;
  items: CartItem[];
  variants: Variant[];
  restaurant_id: string;
}

const VariantModal = ({ itemId, items, variants, restaurant_id }: Props) => {
  const pathName = usePathname();
  const [totalItems, setTotalItems] = React.useState(
    items.filter((item) => item.itemId === itemId).length
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        {totalItems > 0 ? (
          <div className='flex flex-row items-center gap-2'>
            x{totalItems}
            {pathName !== '/account/cart' && (
              <Button variant='primary' size='sm'>
                Add
              </Button>
            )}
          </div>
        ) : (
          <Button variant='primary'>
            <div className='flex flex-row items-center gap-2'>
              <FaPlus />
              Add
            </div>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='max-w-[384px] !rounded-2xl sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <DialogDescription>
            Choose from the available options
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          {variants.map((variant) => {
            const count =
              items.find(
                (item) =>
                  item.itemId === itemId &&
                  item.variant_name === variant.name &&
                  item.variant_price === variant.price
              )?.quantity ?? 0;
            return (
              <div
                key={variant.name}
                className='flex w-full flex-row justify-between'
              >
                <div className='flex flex-col gap-1'>
                  <div className='text-sm font-semibold'>{variant.name}</div>
                  <div className='text-sm text-gray-500'>₹{variant.price}</div>
                </div>
                <RealTimeAddToCart
                  count={count}
                  itemId={itemId}
                  variant_name={variant.name}
                  variant_price={variant.price}
                  setTotalItems={setTotalItems}
                  restaurant_id={restaurant_id}
                />
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VariantModal;
