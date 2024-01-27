import { type NextRequest, NextResponse } from 'next/server';

import Razorpay from 'razorpay';
import { env } from '~/env';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as unknown;

  const { amount } = body as {
    amount: number;
  };

  if (amount === 0) {
    return NextResponse.json({
      error: 'Invalid amount',
    });
  }

  const razorpay = new Razorpay({
    key_id: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: env.RAZORPAY_KEY_SECRET,
  });

  try {
    const res = await razorpay.orders.create({
      amount: amount * 100,
      receipt: '123456',
      currency: 'INR',
      partial_payment: false,
    });

    console.log(res);

    const { id: order_id, amount: amount_in_paise } = res;

    return NextResponse.json({
      order_id,
      amount_in_paise,
    });
  } catch (error) {
    return NextResponse.json({
      error: String(error),
    });
  }
}
