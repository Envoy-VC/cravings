import React from 'react';
import Image from 'next/image';

// Assets
import { CravingsLogo } from '~/assets';

const Navbar = () => {
  return (
    <div className='navbar h-[8vh] px-3'>
      <div className='mx-auto flex h-full max-w-screen-xl items-center justify-between'>
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
      </div>
    </div>
  );
};

export default Navbar;
