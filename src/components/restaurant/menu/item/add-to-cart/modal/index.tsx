import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

import { Button } from '~/components/ui/button';

import RealTimeAddToCart from '../realtime';
import type { Variant } from '../..';
import type { CartItem } from '..';

interface Props {
  itemId: string;
  items: CartItem[];
  variants: Variant[];
}

const VariantModal = ({ itemId, items, variants }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='primary'>Add</Button>
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
