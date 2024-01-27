import React from 'react';

import { Account, Navigation } from '~/components/account';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-[93dvh] bg-slate-50'>
      <div className='mx-auto flex max-w-screen-md flex-col'>
        <Account />
        <div className='flex flex-col gap-4 rounded-lg px-3 md:flex-row md:gap-0 md:py-12'>
          <Navigation />
          {children}
        </div>
      </div>
    </div>
  );
}
