import React from 'react';
import Image from 'next/image';

import { getRestaurantById } from '~/lib/supabase/restaurants';
import { formatTime } from '~/lib/helpers';

interface Props {
  restaurant_id: string;
}

const RestaurantDetails = async ({ restaurant_id }: Props) => {
  const {
    name,
    description,
    street_address,
    city,
    image,
    cuisine_type,
    opening_hours,
    closing_hours,
  } = await getRestaurantById(restaurant_id);

  return (
    <div className='flex flex-col-reverse justify-between gap-4 md:flex-row'>
      <div className='flex w-full flex-col justify-between gap-2'>
        <div className='flex flex-col gap-2'>
          <div className='text-2xl font-semibold sm:text-3xl'>{name}</div>
          <div className='max-w-sm whitespace-pre-wrap text-sm text-neutral-600 sm:text-[1rem]'>
            {description}
          </div>
          <div className='text-sm text-neutral-600'>
            {street_address}, {city}
          </div>
          <div className='flex flex-row flex-wrap'>
            {cuisine_type?.map((ele) => (
              <div
                key={ele}
                className='mb-2 mr-2 rounded-full bg-gray-200 px-2 py-[1px] text-sm text-neutral-800'
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-xs font-medium text-neutral-700 sm:text-[1rem]'>
            Open from {formatTime(opening_hours)} - {formatTime(closing_hours)}
          </div>
        </div>
      </div>
      <div className='w-full max-w-xl'>
        <Image
          src={image ?? ''}
          alt='Restaurant'
          width={300}
          height={200}
          className='aspect-video w-full rounded-2xl object-cover'
        />
      </div>
    </div>
  );
};

export default RestaurantDetails;
