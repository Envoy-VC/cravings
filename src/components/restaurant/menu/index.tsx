import React from 'react';

import { formatMenu } from '~/lib/helpers';
import { getRestaurantMenu } from '~/lib/supabase/restaurants';

import { Divider } from '~/components/common';
import CategoryPill from './category-pill';
import Item from './item';

interface Props {
  restaurant_id: string;
}

const RestaurantMenu = async ({ restaurant_id }: Props) => {
  const menu = formatMenu(await getRestaurantMenu(restaurant_id));
  const categories = Object.keys(menu);
  return (
    <div className='flex flex-col'>
      <div className='hide-scrollbar flex flex-row gap-4 overflow-scroll overscroll-x-contain'>
        {categories.map((category) => {
          return <CategoryPill key={category} category={category} />;
        })}
      </div>
      <div className='flex flex-col gap-4 py-4'>
        {categories.map((category) => {
          return (
            <div key={category} className='flex flex-col gap-4'>
              <div className='text-2xl font-semibold'>{category}</div>
              <div className='flex flex-col gap-2'>
                {menu[category]!.map((item) => {
                  return <Item key={item.id} {...item} />;
                })}
              </div>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
