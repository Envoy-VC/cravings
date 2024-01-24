'use client';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '~/lib/graphql';

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
          <div className='flex w-full flex-row gap-3 overflow-hidden sm:gap-10'>
            {data.restaurantCollection?.edges?.map((restaurant, index) => (
              <div key={index}>{restaurant.node.name}</div>
            ))}
          </div>
        )}
      </div>
      <div className='border-[1px] border-neutral-100' />
    </div>
  );
};

export default Restaurants;
