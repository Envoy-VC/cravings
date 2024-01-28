import React from 'react';

import Image from 'next/image';
import { CravingsLogo } from '~/assets';
import Link from 'next/link';

const items = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Careers',
    href: '/',
  },
  {
    name: 'Partner',
    href: '/partner',
  },
  {
    name: 'Services',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/',
  },
];

const Footer = () => {
  return (
    <footer className='hidden bg-gray-100 sm:block'>
      <div className='mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center text-teal-600'>
          <Image
            src={CravingsLogo}
            alt='Cravings Logo'
            width={50}
            height={50}
          />
        </div>

        <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500'>
          Single stop to all your cravings.
        </p>

        <div className='mt-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-6'>
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-base text-gray-500 hover:text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
