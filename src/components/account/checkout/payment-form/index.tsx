/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import type { UserAddress } from '~/types';

import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import { env } from '~/env';

export interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface Props {
  amount: number;
  addresses: UserAddress[];
}

const PaymentForm = ({ addresses, amount }: Props) => {
  const paymentId = React.useRef<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = React.useState<'upi' | 'cod'>(
    'upi'
  );

  const placeOrder = async () => {
    try {
      if (!address) {
        toast.error('Please select a delivery address');
        return;
      }
    } catch (error) {}
  };

  const placeOrderWithUPI = async () => {
    try {
      if (!address) {
        toast.error('Please select a delivery address');
        return;
      }
      // Create Order
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = (await res.json()) as
        | {
            order_id: string;
            amount_in_paise: number;
          }
        | {
            error: string;
          };

      if ('error' in data) {
        toast.error(data.error);
        return;
      }
      const { order_id, amount_in_paise } = data;

      // Create Razorpay Instance
      const options = {
        key: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount_in_paise,
        currency: 'INR',
        name: 'cravings',
        order_id: order_id,
        handler: async (res: RazorpayResponse) => {
          console.log(res);
          paymentId.current = res.razorpay_payment_id;

          const result = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: res.razorpay_order_id,
              razorpay_payment_id: res.razorpay_payment_id,
              razorpay_signature: res.razorpay_signature,
            }),
          });
          const { success } = (await result.json()) as {
            success: boolean;
          };

          if (success) {
            alert('Success');
          } else {
            alert('Failed');
          }
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {}
  };

  return (
    <div className='my-4 flex w-full flex-col gap-3'>
      <div>
        <div className='my-2 font-medium'>Select Delivery Address</div>
        <Select
          onValueChange={(value) => setAddress(value)}
          value={address ?? undefined}
        >
          <SelectTrigger>
            <SelectValue placeholder='Delivery Address' />
          </SelectTrigger>
          <SelectContent>
            {addresses.map((address) => (
              <SelectItem key={address.address_id} value={address.address_id}>
                {address.address_line1} {address.address_line2} {address.city}
                {' ,'} {address.state} {address.postal_code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <div className='my-2 font-medium'>Select Payment Method</div>
        <Select
          onValueChange={(value) => setPaymentMethod(value as 'upi' | 'cod')}
          value={paymentMethod}
        >
          <SelectTrigger>
            <SelectValue placeholder='Payment Method' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='upi'>UPI</SelectItem>
            <SelectItem value='cod'>Cash on Delivery</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={async () => {
          if (paymentMethod === 'upi') {
            await placeOrderWithUPI();
          } else {
            await placeOrder();
          }
        }}
      >
        Place Order
      </Button>
    </div>
  );
};

export default PaymentForm;
