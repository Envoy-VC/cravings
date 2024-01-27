import React from 'react';
import Image from 'next/image';

import { currentUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '~/components/ui/button';

import { IoLogOutOutline } from 'react-icons/io5';

const AccountDetails = async () => {
  const user = await currentUser();
  const { firstName, lastName, emailAddresses, imageUrl } = user!;
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row gap-4'>
        <Image
          src={imageUrl ?? ''}
          alt='user image'
          width={64}
          height={64}
          className='rounded-full'
        />
        <div className='flex flex-col items-start'>
          <div className='text-xl font-medium'>{`${firstName} ${lastName}`}</div>
          <div className='font-medium text-gray-500 '>
            {emailAddresses?.at(0)?.emailAddress}
          </div>
        </div>
      </div>
      <Button variant='ghost' size='icon' className='max-w-[196px]'>
        <SignOutButton>
          <IoLogOutOutline className='text-2xl' />
        </SignOutButton>
      </Button>
    </div>
  );
};

export default AccountDetails;
