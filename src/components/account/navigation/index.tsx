'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoBagHandleOutline, IoCartOutline } from 'react-icons/io5';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

import type { IconType } from 'react-icons';

const NavigationItem = ({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: IconType;
}) => {
  const pathname = usePathname();

  return (
    <Link
      className='flex !w-full flex-row items-center gap-2 px-2 py-1 md:rounded-l-lg md:px-3 md:py-3'
      href={href}
      style={{
        backgroundColor: pathname === href ? '#3F72AF' : '',
        color: pathname === href ? '#FFFFFF' : '',
      }}
    >
      <Icon className='md:text-xl' />
      <span className='md:text-xl'>{name}</span>
    </Link>
  );
};

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (value: string) => {
    try {
      router.prefetch(value);
      router.push(value);
    } catch (error) {}
  };

  return (
    <>
      <div className='flex items-center justify-center md:hidden'>
        <Select onValueChange={onChange}>
          <SelectTrigger className='w-full max-w-sm text-lg'>
            <SelectValue
              placeholder={
                items.find((item) => item.href.includes(pathname))?.name
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup
              defaultValue={
                items.find((item) => item.href.includes(pathname))?.href
              }
            >
              {items.map((item) => {
                return (
                  <SelectItem key={item.name} value={item.href} className=''>
                    <div className='flex flex-row items-center gap-2'>
                      <item.icon className='text-xl text-slate-700' />
                      <span className='text-lg text-slate-700'>
                        {item.name}
                      </span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='hidden flex-col gap-2 bg-white md:flex'>
        {items.map((item) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </div>
    </>
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
