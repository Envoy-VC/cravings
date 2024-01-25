import React from 'react';

import { getRestaurantById } from '~/lib/supabase/restaurants';

interface Props {
  params: {
    id: string;
  };
}

const Restaurants = async ({ params }: Props) => {
  const restaurant = await getRestaurantById(params.id);

  return (
    <div>
      <div>{restaurant.name} a</div>
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
