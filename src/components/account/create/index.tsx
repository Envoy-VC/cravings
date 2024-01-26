import React from 'react';
import Image from 'next/image';

import { currentUser } from '@clerk/nextjs';
import CreateAccountButton from './button';

const CreateAccount = async () => {
  const user = await currentUser();
  return (
    <div className='mx-auto w-full max-w-screen-sm px-3 py-12'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <div className='text-2xl font-medium sm:text-3xl'>
          Create your account
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <Image
            src={user?.imageUrl ?? ''}
            alt='user image'
            width={160}
            height={160}
            className='rounded-full'
          />
          <div className='text-xl font-medium'>{`${user?.firstName} ${user?.lastName}`}</div>
          <div className='text-lg'>
            {user?.emailAddresses?.at(0)?.emailAddress}
          </div>
          <CreateAccountButton />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
