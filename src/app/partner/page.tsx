import React from 'react';

import { currentUser } from '@clerk/nextjs';

import { CreateRestaurant, RestaurantDashboard } from '~/components/partner';

const PartnerPage = async () => {
  const user = await currentUser();

  if (user && user?.publicMetadata.role === 'user') {
    return (
      <div className='mx-auto max-w-screen-xl px-3 py-12'>
        <CreateRestaurant />
      </div>
    );
  } else {
    return (
      <div className='mx-auto max-w-screen-xl px-3 py-12'>
        <RestaurantDashboard />
      </div>
    );
  }
};

export default PartnerPage;
