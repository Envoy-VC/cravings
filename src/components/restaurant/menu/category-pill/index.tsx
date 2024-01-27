'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

import type { MenuCategory } from '~/types';

interface Props {
  category: string;
}

const CategoryPill = ({ category_name }: MenuCategory) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasCategory = searchParams.has('category');
  const currentCategory = searchParams.get('category');

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      className={clsx(
        'flex w-full cursor-pointer whitespace-nowrap rounded-full px-5 py-2 font-medium',
        hasCategory && currentCategory === category_name
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-neutral-700'
      )}
      onClick={() => {
        router.push(
          `${pathname}?${createQueryString('category', category_name)}`
        );
      }}
    >
      {category_name}
    </div>
  );
};

export default CategoryPill;
