'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUser, SignOutButton } from '@clerk/nextjs';

import { Button } from '~/components/ui/button';

// Assets
import { CravingsLogo } from '~/assets';

// Icons
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdOutlineRestaurant } from 'react-icons/md';

const Navbar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  if (pathname === '/auth') return null;

  return (
    <div className='navbar h-[7vh] w-full bg-white px-3'>
      <div className='mx-auto flex h-full max-w-screen-2xl items-center justify-between'>
        <Link className='flex flex-row items-center' href='/'>
          <Image
            src={CravingsLogo}
            alt='Cravings Logo'
            width={32}
            height={32}
            className='rounded-full'
          />
          <div className='mb-1 ml-2 font-sunday text-2xl font-medium sm:text-3xl md:text-[2.2rem]'>
            cravings
          </div>
        </Link>
        <div className='flex flex-row items-center gap-3'>
          <div className='hidden flex-row items-center gap-3 sm:flex'>
            <Link href='/search'>
              <Button variant='link' className='flex items-center gap-2'>
                <FaMagnifyingGlass />
                Search
              </Button>
            </Link>
            <Link href='/'>
              <Button variant='outline' className='flex items-center gap-2'>
                <MdOutlineRestaurant className='text-lg text-neutral-800' />
                Restaurants
              </Button>
            </Link>
          </div>
          {user ? (
            <Button asChild variant='primary'>
              <SignOutButton />
            </Button>
          ) : (
            <Button asChild variant='primary'>
              <Link href='/auth'>Sign-in</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
