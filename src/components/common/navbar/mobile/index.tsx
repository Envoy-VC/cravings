import React from 'react';
import NavItems from './item';

const MobileNavbar = () => {
  return (
    <div className='block h-[7dvh] w-full border-2 bg-white sm:hidden'>
      <div className='flex h-full flex-row items-center justify-around'>
        <NavItems />
      </div>
    </div>
  );
};

export default MobileNavbar;
