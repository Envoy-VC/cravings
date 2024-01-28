import React from 'react';

import { auth } from '@clerk/nextjs';
import { RestaurantDetails } from '~/components/restaurant';

import { getRestaurantByOwner } from '~/lib/supabase/user';

const RestaurantDashboard = async () => {
  const { userId } = auth();
  const restaurant = await getRestaurantByOwner(userId!);
  return (
    <div>
      <RestaurantDetails restaurant_id={restaurant.id} />
    </div>
  );
};

export default RestaurantDashboard;
