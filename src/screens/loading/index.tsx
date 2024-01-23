import React from 'react';
import Image from 'next/image';

import { CravingsLogo } from '~/assets';
import { FaSpinner } from 'react-icons/fa6';

const LoadingScreen = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <Image
        src={CravingsLogo}
        alt='Cravings Logo'
        width={64}
        height={64}
        className='rounded-full'
      />
      <div className='mt-2 font-sunday text-2xl font-semibold sm:text-3xl md:text-[2.2rem]'>
        cravings
      </div>
      <div className='mt-2 flex flex-row items-center gap-2'>
        <FaSpinner className='animate-spin' />
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
