import React from 'react';

import { RestaurantDetails, RestaurantMenu } from '~/components/restaurant';
import { Divider } from '~/components/common';

import { headers } from 'next/headers';

const Restaurants = () => {
  const headersList = headers();
  const activePath = headersList.get('x-pathname');

  const restaurantId = activePath?.split('/')[activePath.split('/').length - 1];

  return (
    <div className='mx-auto my-10 w-full max-w-screen-md px-2'>
      <RestaurantDetails restaurant_id={restaurantId!} />
      <div className='my-6'>
        <Divider />
      </div>
      <RestaurantMenu restaurant_id={restaurantId!} />
    </div>
  );
};

export default Restaurants;
