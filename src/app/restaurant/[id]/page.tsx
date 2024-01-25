import React from 'react';

import { createClient } from '@supabase/supabase-js';

import { getRestaurantById } from '~/lib/supabase/restaurants';
import { RestaurantDetails } from '~/components/restaurant';
import { Divider } from '~/components/common';

import { env } from '~/env';
import { Database } from '~/types/database.types';

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
  const supabase = createClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const res = await supabase.from('Restaurant').select('id');

  if (!res.data) {
    return [];
  }

  return res.data.map((r) => ({
    params: {
      id: r.id,
    },
  }));
};

export default Restaurants;
