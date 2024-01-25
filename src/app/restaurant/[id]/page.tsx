import React from 'react';

import { getRestaurantById } from '~/lib/supabase/restaurants';
import { RestaurantDetails } from '~/components/restaurant';
import { Divider } from '~/components/common';

interface Props {
  params: {
    id: string;
  };
}

const Restaurants = async ({ params }: Props) => {
  const restaurant = await getRestaurantById(params.id);

  return (
    <div className='mx-auto my-10 w-full max-w-screen-xl px-2'>
      <RestaurantDetails {...restaurant} />
      <div className='my-6'>
        <Divider />
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:3000/api/restaurants', {
    method: 'POST',
  });

  const data = (await res.json()) as {
    paths: {
      slug: string;
    }[];
  };

  return data.paths.map((r) => ({
    slug: r.slug,
  }));
};

export default Restaurants;
