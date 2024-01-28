import React from 'react';

import { auth } from '@clerk/nextjs';
import { RestaurantDetails } from '~/components/restaurant';

import { getRestaurantByOwner } from '~/lib/supabase/user';
import { RestaurantOrders } from '..';

const RestaurantDashboard = async () => {
  const { userId } = auth();
  const restaurant = await getRestaurantByOwner(userId!);
  return (
    <div className='flex flex-col gap-4'>
      <RestaurantDetails restaurant_id={restaurant.id} />
      <RestaurantOrders restaurant_id={restaurant.id} />
    </div>
  );
};

export default RestaurantDashboard;
