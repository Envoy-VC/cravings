import React from 'react';

import { getUserAddresses } from '~/lib/supabase/user';
import { type UserCart } from '~/types';

import type { UserCartItem } from '~/app/account/cart/page';
import { getRestaurantById } from '../../../lib/supabase/restaurants/index';

import PaymentForm from './payment-form';
interface Props {
  cart: UserCart;
}

const Checkout = async ({ cart }: Props) => {
  const addresses = await getUserAddresses(cart.user_id);
  const restaurant = await getRestaurantById(cart.restaurant_id!);

  const { items } = JSON.parse(JSON.stringify(cart.items)) as {
    items: UserCartItem[];
  };

  return (
    <div className='flex flex-col gap-2'>
      {/** Bill Details item total and delivery fees */}
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div className='text-lg font-medium text-gray-600'>Bill Details</div>
          <div className='my-2 border-[1px] border-gray-200' />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-500'>Cart Total</div>
          <div className='text-gray-500'>
            {items.reduce((acc, item) => acc + item.quantity, 0)}
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='text-gray-500'>Item Total</div>
          <div className='text-gray-500'>
            ₹
            {items.reduce(
              (acc, item) => acc + item.quantity * item.variant_price,
              0
            )}
          </div>
        </div>
      </div>
      <PaymentForm
        addresses={addresses}
        cart={cart}
        amount={items.reduce(
          (acc, item) => acc + item.quantity * item.variant_price,
          0
        )}
      />
    </div>
  );
};

export default Checkout;
