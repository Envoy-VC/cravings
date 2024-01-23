import React from 'react';
import { SignUp } from '@clerk/nextjs';

import { Navbar } from '~/components/common';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full items-center justify-center py-6 md:py-24'>
        <SignUp
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
