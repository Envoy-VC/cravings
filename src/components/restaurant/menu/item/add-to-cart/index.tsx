import React from 'react';

import { auth } from '@clerk/nextjs';
import { getUserCart } from '~/lib/supabase/user';
import RealTimeAddToCart from './realtime';

interface Props {
  itemId: string;
}

const AddToCart = async ({ itemId }: Props) => {
  const { userId } = auth();
  const cart = await getUserCart(userId ?? '');
  const count = cart.filter((item) => item === itemId).length;

  return <RealTimeAddToCart count={count} itemId={itemId} />;
};

export default AddToCart;
