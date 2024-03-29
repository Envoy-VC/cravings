/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import type { Restaurant } from '~/types';

const RestaurantCard = ({
  id,
  name,
  image,
  cuisine_type,
  street_address,
}: Restaurant) => {
  return (
    <Link
      className='flex h-full cursor-pointer flex-col gap-2 transition-all duration-200 ease-out hover:scale-[98%]'
      href={`/restaurant/${id}`}
    >
      <img
        src={image ?? ''}
        alt='Restaurant'
        width={300}
        height={200}
        className='aspect-video w-[24rem] rounded-2xl object-cover'
      />
      <div className='flex flex-col gap-[2px]'>
        <div className='text-[1.1rem] font-medium'>{name}</div>
        <div className='flex flex-row flex-wrap'>
          {cuisine_type?.map((ele) => (
            <div
              key={ele}
              className='mb-2 mr-2 rounded-full bg-neutral-100 px-2 py-[1px] text-xs text-neutral-800'
            >
              {ele}
            </div>
          ))}
        </div>
        <div className='text-sm text-neutral-500'>{street_address}</div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
