import React from 'react';
import Image from 'next/image';

import { currentUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '~/components/ui/button';

const AccountDetails = async () => {
  const user = await currentUser();
  const { firstName, lastName, emailAddresses, imageUrl } = user!;
  return (
    <div className='mx-auto w-full max-w-screen-sm px-3 py-12'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <Image
          src={imageUrl ?? ''}
          alt='user image'
          width={160}
          height={160}
          className='rounded-full'
        />
        <div className='text-xl font-medium'>{`${firstName} ${lastName}`}</div>
        <div className='text-lg'>{emailAddresses?.at(0)?.emailAddress}</div>
        <Button variant='primary' size='lg' className='max-w-[196px]'>
          <SignOutButton />
        </Button>
      </div>
    </div>
  );
};

export default AccountDetails;
