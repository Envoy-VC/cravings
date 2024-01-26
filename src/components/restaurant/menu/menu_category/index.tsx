import React from 'react';

import { getCategoryItems } from '~/lib/supabase/restaurants';

import Item from '../item';

interface Props {
  category_id: string;
  name: string;
}
const MenuCategory = async ({ category_id, name }: Props) => {
  const items = await getCategoryItems(category_id);
  return (
    <div className='flex flex-col gap-4 py-2'>
      <div className='text-lg font-semibold'>{name}</div>
      <div className='flex flex-col gap-1'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
