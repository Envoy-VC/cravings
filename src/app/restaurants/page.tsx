import React from 'react';

import { CategorySlider, Restaurants } from '~/components/restaurants';

const Restaurant = () => {
  return (
    <div className='mx-auto max-w-screen-2xl px-2 py-10'>
      <CategorySlider />
      <Restaurants />
    </div>
  );
};

export default Restaurant;
