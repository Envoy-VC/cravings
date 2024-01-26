'use client';

import React from 'react';

import { useAuth } from '@clerk/nextjs';

import { Button } from '~/components/ui/button';

const CreateAccountButton = () => {
  const { userId } = useAuth();
  const onClick = async () => {
    if (!userId) return;
    try {
      const res = await fetch('/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'user',
          userId: userId,
        }),
      });

      const { success } = (await res.json()) as {
        success: boolean;
        error: string | null;
      };

      if (success) {
        window.location.reload();
      } else {
        console.log('error', success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant='primary'
      size='lg'
      className='max-w-[196px]'
      onClick={onClick}
    >
      Create Account
    </Button>
  );
};

export default CreateAccountButton;
