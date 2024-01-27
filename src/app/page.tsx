import React from 'react';

import { CategorySlider, Restaurants } from '~/components/restaurant';

const Home = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-2 py-10'>
      <CategorySlider />
      <Restaurants />
    </div>
  );
};

export default Home;
