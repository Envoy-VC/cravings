import React from 'react';

import RealtimeOrder from './realtime';
import type { Order } from '~/types';
import { getItemDetails } from '../../../lib/supabase/restaurants/index';
import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';

interface Props {
  order: Order;
}

const OrderCard = async ({ order }: Props) => {
  const serverOrder = order;

  const { items } = JSON.parse(JSON.stringify(order.items_ordered)) as {
    items: CartItem[];
  };

  const details = await Promise.all(items.map(async (item) => {
    const itemDetails = await getItemDetails(item.itemId);
    return itemDetails!;
  }));
  return (
    <div>
      <RealtimeOrder serverOrder={serverOrder} details={details} />
    </div>
  );
};

export default OrderCard;
