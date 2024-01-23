'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import WebNavbar from './web';

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === '/login' || pathname === '/sign-up') return <></>;
  return <WebNavbar />;
};

export default Navbar;
