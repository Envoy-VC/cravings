'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoBagHandleOutline, IoCartOutline } from 'react-icons/io5';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

const Navigation = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  const onChange = (value: string) => {
    try {
      router.prefetch(value);
      router.push(value);
    } catch (error) {}
  };

  return (
    <Tabs defaultValue='/account' className='w-full max-w-screen-md'>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger
            key={item.name}
            value={item.href}
            onClick={() => {
              onChange(item.href);
            }}
            className='flex max-w-full flex-row items-center gap-2 px-2 py-1 md:rounded-l-lg md:px-3 md:py-3'
          >
            <item.icon className='md:text-lg' />
            <span className='md:text-lg'>{item.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className='py-4'>{children}</div>
    </Tabs>
  );
};

export const items = [
  {
    name: 'Dashboard',
    href: '/account',
    icon: MdOutlineSpaceDashboard,
  },
  {
    name: 'Cart',
    href: '/account/cart',
    icon: IoCartOutline,
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: IoBagHandleOutline,
  },
  {
    name: 'Addresses',
    href: '/account/addresses',
    icon: FaRegAddressBook,
  },
  {
    name: 'Payments',
    href: '/account/payment-methods',
    icon: MdPayment,
  },
];

export default Navigation;
