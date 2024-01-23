import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { currentUser, SignOutButton } from '@clerk/nextjs';

import { Button } from '~/components/ui/button';

// Assets
import { CravingsLogo } from '~/assets';

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className='navbar h-[8vh] px-3'>
      <div className='mx-auto flex h-full max-w-screen-2xl items-center justify-between'>
        <div className='flex flex-row items-center'>
          <Image
            src={CravingsLogo}
            alt='Cravings Logo'
            width={34}
            height={34}
            className='rounded-full'
          />
          <div className='mb-1 ml-2 text-2xl font-semibold sm:text-3xl md:text-4xl'>
            cravings
          </div>
        </div>
        {user ? (
          <div className='flex gap-2'>
            {user.firstName}
            <SignOutButton />
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            <Button asChild variant='primary'>
              <Link href='/login'>Login</Link>
            </Button>
            <Button asChild variant='secondary'>
              <Link href='/sign-up'>Sign-up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
