import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserAddresses } from '~/lib/supabase/user';
import AddAddress from '~/components/account/add-address';

const Addresses = async () => {
  const { userId } = auth();
  const addresses = await getUserAddresses(userId!);

  return (
    <div className='w-full'>
      {addresses.map((address, index) => (
        <div className='w-full p-5' key={address.address_id}>
          <div className='font-medium text-gray-500'>Address {index + 1}</div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-3 pb-2'>
              <div className='flex flex-col'>
                <div className='font-semibold'>
                  {address.address_line1} {address.address_line2}
                </div>
                <div className='text-sm text-gray-400'>
                  {address.city}, {address.state} {address.postal_code}
                </div>
              </div>
            </div>
            <div className='my-4 w-full border-[1px] border-gray-200' />
          </div>
        </div>
      ))}
      <AddAddress />
    </div>
  );
};

export default Addresses;
