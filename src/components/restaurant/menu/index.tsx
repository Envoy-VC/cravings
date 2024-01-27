import React from 'react';

import MenuCategory from './menu_category';
import { getRestaurantMenuCategories } from '~/lib/supabase/restaurants';

import CategoryPill from './category-pill';

interface Props {
  restaurant_id: string;
}

const RestaurantMenu = async ({ restaurant_id }: Props) => {
  const categories = await getRestaurantMenuCategories(restaurant_id);

  return (
    <div className='flex flex-col'>
      <div className='hide-scrollbar flex flex-row gap-4 overflow-scroll overscroll-x-contain'>
        {categories.map((category) => {
          return <CategoryPill key={category.category_id} {...category} />;
        })}
      </div>
      <div className='flex flex-col gap-4 py-4'>
        {categories
          .sort((a, b) => a.order - b.order)
          .map((category) => {
            return (
              <MenuCategory
                key={category.category_id}
                category_id={category.category_id}
                name={category.category_name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
