'use client';

import React from 'react';

import type { MenuItem, Order, UserAddress } from '~/types';
import Image from 'next/image';
import createSupabaseClient from '~/lib/supabase/client';
import type { CartItem } from '~/components/restaurant/menu/item/add-to-cart';
import { updateOrderStatus } from '~/lib/supabase/restaurants';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { toast } from 'sonner';

interface Props {
  serverOrder: Order;
  details: MenuItem[];
  address: UserAddress;
}

const RealtimeOrder = ({ serverOrder, details, address }: Props) => {
  const supabase = createSupabaseClient();

  const [order, setOrder] = React.useState<Order>(serverOrder);
  const { items } = JSON.parse(JSON.stringify(order.items_ordered)) as {
    items: CartItem[];
  };

  const onChange = async (status: string) => {
    try {
      console.log(status, order.order_id);
      await updateOrderStatus(order.order_id, status);
      toast.success(`Updated order ${order.order_id}`);
    } catch (error) {
      toast.error(String(error));
    }
  };

  React.useEffect(() => {
    const channel = supabase
      .channel(`order-${serverOrder.order_id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_orders',
          filter: `order_id=eq.${serverOrder.order_id}`,
        },
        (payload) => {
          console.log(payload);
          setOrder(payload.new as Order);
        }
      )
      .subscribe();

    console.log(channel);

    return () => {
      void channel.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-2 rounded-xl border-2 border-primary bg-gray-50 p-3'>
        <div className='font-regular text-sm  text-gray-600'>
          Order ID: <span className='font-medium'>{order.order_id}</span>
        </div>

        <span className='font-regular'>
          Order Status:{' '}
          <span className='font-medium'>
            {order.order_status === 'is_pending' && 'Pending'}
            {order.order_status === 'out_for_delivery' && 'Out for delivery'}
            {order.order_status === 'delivered' && 'Delivered'}
          </span>
        </span>
        <div className='my-2 text-xl font-medium'>Items</div>
        <div className='flex flex-col gap-1'>
          {items.map((item, i) => (
            <div key={i} className='flex flex-row gap-4'>
              <Image
                src={details[i]?.item_image ?? ''}
                width={50}
                height={50}
                className='rounded-xl'
                objectFit='cover'
                alt={details[i]?.item_name ?? ''}
              />
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2'>
                  <div>{details[i]?.item_name}</div> -
                  <div>{item.variant_name}</div>
                </div>
                <span className='font-regular'>
                  Quantity: <span className='font-medium'>{item.quantity}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='my-5'>
          <div className='font-medium text-slate-700'>Address</div>
          <div className='font-regular text-sm text-gray-600'>
            {address.address_line1}, {address.address_line2}, {address.city},{' '}
            {address.state}, {address.postal_code}
          </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div className='font-medium text-slate-700'>Change Order Status</div>
          <Select
            onValueChange={async (value) => {
              await onChange(value);
            }}
          >
            <SelectTrigger
              className='w-[180px]'
              value={order.order_status}
              defaultValue={order.order_status}
            >
              <SelectValue placeholder='Change Order Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value='is_pending'>Pending</SelectItem>
                <SelectItem value='out_for_delivery'>
                  Out for delivery
                </SelectItem>
                <SelectItem value='delivered'>Delivered</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default RealtimeOrder;
