import React from 'react';

import RealtimeOrder from './realtime';
import type { Order, UserAddress } from '~/types';
import { getItemDetails } from '../../../lib/supabase/restaurants/index';

import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';
import { getUserAddresses } from '../../../lib/supabase/user/index';

interface Props {
  order: Order;
}

const OrderCard = async ({ order }: Props) => {
  const serverOrder = order;

  const { items } = JSON.parse(JSON.stringify(order.items_ordered)) as {
    items: CartItem[];
  };

  const details = await Promise.all(
    items.map(async (item) => {
      const itemDetails = await getItemDetails(item.itemId);
      return itemDetails!;
    })
  );

  const address = (await getUserAddresses(order.user_id)).filter(
    (addr) => (addr.address_id = order.address_id)
  )[0] as UserAddress;

  return (
    <div>
      <RealtimeOrder
        serverOrder={serverOrder}
        details={details}
        address={address}
      />
    </div>
  );
};

export default OrderCard;
