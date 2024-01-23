import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { currentUser, SignOutButton } from '@clerk/nextjs';

import { Button } from '~/components/ui/button';

// Assets
import { CravingsLogo } from '~/assets';

// Icons
import { FaMagnifyingGlass } from 'react-icons/fa6';

const WebNavbar = async () => {
  const user = await currentUser();
  return (
    <div className='navbar fixed top-0 h-[7vh] w-full bg-white px-3'>
      <div className='mx-auto flex h-full max-w-screen-2xl items-center justify-between'>
        <div className='flex flex-row items-center'>
          <Image
            src={CravingsLogo}
            alt='Cravings Logo'
            width={32}
            height={32}
            className='rounded-full'
          />
          <div className='mb-1 ml-2 font-sunday text-2xl font-semibold sm:text-3xl md:text-[2.2rem]'>
            cravings
          </div>
        </div>
        <div className='hidden flex-row items-center gap-3 sm:flex'>
          <Link href='/search'>
            <Button variant='link' className='flex items-center gap-2'>
              <FaMagnifyingGlass />
              Search
            </Button>
          </Link>
          {user ? (
            <SignOutButton />
          ) : (
            <>
              <Button asChild variant='primary'>
                <Link href='/login'>Login</Link>
              </Button>
              <Button asChild variant='secondary'>
                <Link href='/sign-up'>Sign-up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
