'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  category: string;
}

const CategoryPill = ({ category }: Props) => {
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
        'cursor-pointer rounded-full px-5 py-2 font-medium',
        hasCategory && currentCategory === category
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-neutral-700'
      )}
      onClick={() => {
        router.push(`${pathname}?${createQueryString('category', category)}`);
      }}
    >
      {category}
    </div>
  );
};

export default CategoryPill;
