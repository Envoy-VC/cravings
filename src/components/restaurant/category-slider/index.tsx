'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

import { categories } from '~/data';

import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import Link from 'next/link';

const CategorySlider = () => {
  const { user } = useUser();
  const ref = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = ref.current;
    if (!container) return;
    const containerScrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const scrollStep = containerWidth / 2;
    if (direction === 'left') {
      container.scroll({
        top: 0,
        left: containerScrollPosition - scrollStep,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      container.scroll({
        top: 0,
        left: containerScrollPosition + scrollStep,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex w-full flex-row items-center justify-between'>
        <div className='text-lg font-semibold sm:text-2xl'>
          Belly rumbling? We got you
          {user && `, ${user.firstName}`}.
        </div>
        <div className='flex flex-row items-center gap-2 sm:gap-4'>
          <div className='cursor-pointer rounded-full bg-gray-200 p-[6px] text-lg text-neutral-900 sm:text-xl'>
            <IoArrowBackOutline onClick={() => handleScroll('left')} />
          </div>
          <div className='cursor-pointer rounded-full bg-gray-200 p-[6px] text-lg text-neutral-900 sm:text-xl'>
            <IoArrowForwardOutline onClick={() => handleScroll('right')} />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div
          className='flex w-full flex-row gap-3 overflow-hidden sm:gap-10'
          ref={ref}
        >
          {categories.map((category) => (
            <Link
              key={category.path}
              className='min-w-[8rem] sm:min-w-[10rem]'
              href={`/category/${category.path}`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className='aspect-square h-full w-full object-cover'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='border-[1px] border-neutral-100' />
    </div>
  );
};

export default CategorySlider;
