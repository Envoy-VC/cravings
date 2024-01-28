import React from 'react';

import { Account, Navigation } from '~/components/account';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-[93dvh] bg-slate-50'>
      <div className='mx-auto flex max-w-screen-sm flex-col'>
        <Account />
        <div className='mx-3 flex flex-col gap-4 rounded-lg bg-white md:my-12 md:flex-row md:gap-0 '>
          <Navigation>{children}</Navigation>
        </div>
      </div>
    </div>
  );
}
