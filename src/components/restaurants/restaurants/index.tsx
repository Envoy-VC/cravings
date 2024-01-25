'use client';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '~/lib/graphql';
import RestaurantCard from '../card';

const Restaurants = () => {
  const { loading, data } = useQuery(GET_RESTAURANTS, {
    variables: {},
  });
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-lg font-semibold sm:text-2xl'>
        Discover restaurants near you.
      </div>

      <div className='w-full'>
        {loading && <div>Loading...</div>}

        {data && (
          <div className='grid grid-cols-1 place-items-center gap-8 place-self-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {data.restaurantCollection?.edges?.map((ele) => {
              const restaurant = ele?.node;
              console.log(restaurant);
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
