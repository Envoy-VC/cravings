import { type NextRequest, NextResponse } from 'next/server';

import { env } from '~/env';
import crypto from 'crypto';

import type { RazorpayResponse } from '~/components/account/checkout/payment-form';

export async function POST(req: NextRequest) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    (await req.json()) as RazorpayResponse;

  const data = razorpay_order_id + '|' + razorpay_payment_id;

  const expected = crypto
    .createHmac('sha256', env.RAZORPAY_KEY_SECRET)
    .update(data)
    .digest('hex');

  const res = expected === razorpay_signature;

  console.log(res);

  return NextResponse.json({
    success: res,
  });
}
