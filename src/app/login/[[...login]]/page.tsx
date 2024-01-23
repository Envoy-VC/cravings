import React from 'react';
import Image from 'next/image';

import { SignIn } from '@clerk/nextjs';

import { BGLogin } from '~/assets';

const Login = () => {
  return (
    <div className='flex min-h-screen w-full flex-col sm:justify-center lg:flex-row lg:justify-start'>
      <div className='flex w-full basis-1/2 sm:hidden lg:flex'>
        <Image
          src={BGLogin.src}
          alt='Background Login'
          width={1920}
          height={1080}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex w-full basis-1/2 items-center justify-center'>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 'bg-primary hover:bg-secondary',
              card: 'clerk-container shadow-none',
              footerActionLink: 'text-secondary hover:text-primary',
              logoBox: 'hidden sm:block',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;
