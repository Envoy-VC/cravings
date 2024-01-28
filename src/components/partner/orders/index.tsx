import React from 'react';

export const revalidate = 1;

import { getOrdersForRestaurant,getItemDetails } from '~/lib/supabase/restaurants';
import OrderCard from '../order-card';

interface Props {
  restaurant_id: string;
}
const RestaurantOrders = async ({ restaurant_id }: Props) => {
  const data = await getOrdersForRestaurant(restaurant_id);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        {data.map((order) => (
          <OrderCard order={order} key={order.order_id}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantOrders;
