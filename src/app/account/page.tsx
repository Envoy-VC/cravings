import React from 'react';

import { auth, currentUser } from '@clerk/nextjs';

import Link from 'next/link';
import { Button } from '~/components/ui/button';

import { AccountDetails, CreateAccount } from '~/components/account';

const AccountPage = async () => {
  const user = await currentUser();
  const { userId } = auth();

  if (userId && user?.publicMetadata?.role === 'user') {
    return <AccountDetails />;
  } else if (userId) {
    return <CreateAccount />;
  } else {
    return (
      <div className='mx-auto max-w-screen-lg px-3 py-12'>
        <div className='flex flex-col items-center justify-center gap-2 text-center'>
          <div className='text-2xl font-medium'>Sign-in to your account</div>
          <Button variant='primary' size='sm' className='max-w-[196px]' asChild>
            <Link href='/auth'> Sign-in</Link>
          </Button>
          {userId}
        </div>
      </div>
    );
  }
};

export default AccountPage;
