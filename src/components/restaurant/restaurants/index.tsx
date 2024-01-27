import React from 'react';

import { getRestaurants } from '~/lib/supabase/restaurants';
import RestaurantCard from '../card';

const Restaurants = async () => {
  const data = await getRestaurants();
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-lg font-semibold sm:text-2xl'>
        Discover restaurants near you.
      </div>

      <div className='w-full'>
        {data && (
          <div className='grid grid-cols-1 place-items-center gap-8 place-self-start sm:place-items-start md:grid-cols-2 lg:grid-cols-3'>
            {data.map((restaurant) => {
              return <RestaurantCard key={restaurant.id} {...restaurant} />;
            })}
          </div>
        )}
      </div>
      <div className='border-[1px] border-neutral-100' />
    </div>
  );
};

export default Restaurants;
