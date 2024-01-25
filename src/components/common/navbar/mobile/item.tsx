'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

// Icons
import {
  FaHouse,
  FaBurger,
  FaMagnifyingGlass,
  FaRegUser,
} from 'react-icons/fa6';

import type { IconType } from 'react-icons';

interface Props {
  name: string;
  icon: IconType;
  link: string;
}

const NavItems = () => {
  return (
    <>
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </>
  );
};

const NavItem = ({ name, icon, link }: Props) => {
  const pathname = usePathname();
  const Icon = icon;
  return (
    <Link
      href={link}
      className={clsx(
        'flex flex-col items-center justify-center',
        pathname === link ? 'text-primary' : 'text-gray-400'
      )}
    >
      <Icon className='text-2xl' />
      <div className='text-xs'>{name}</div>
    </Link>
  );
};

const navItems = [
  {
    name: 'Home',
    icon: FaHouse,
    link: '/',
  },
  {
    name: 'Categories',
    icon: FaBurger,
    link: '/categories',
  },
  {
    name: 'Search',
    icon: FaMagnifyingGlass,
    link: '/search',
  },
  {
    name: 'Account',
    icon: FaRegUser,
    link: '/account',
  },
];

export default NavItems;
