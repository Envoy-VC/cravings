'use client';

import React from 'react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '@clerk/nextjs';
import { addAddress } from '~/lib/supabase/user';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

const AddAddress = () => {
  return (
    <div className='flex w-full flex-col'>
      <Dialog>
        <DialogTrigger>
          <Button variant='primary' className='max-w-[160px]'>
            Add Address
          </Button>
        </DialogTrigger>
        <DialogContent className='max-w-sm !rounded-xl'>
          <DialogHeader>
            <DialogTitle>Add Address</DialogTitle>
          </DialogHeader>
          <AddAddressForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AddAddressForm = () => {
  const { userId } = useAuth();
  const form = useForm<AddressForm>({
    resolver: zodResolver(addressSchema),
  });

  async function onSubmit(values: AddressForm) {
    if (!userId) return;
    try {
      await addAddress(userId, values);
      toast.success('Successfully added address');
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.reload();
    } catch (error) {
      toast.error(String(error));
    }
  }

  return (
    <div className='mx-auto w-full max-w-sm'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='address_line1'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Address Line 1' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address_line2'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Address Line 2' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-row items-center gap-2'>
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='City' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='state'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='State' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='postal_code'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Postal Code' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='my-4 flex flex-row items-center justify-end gap-4'>
            <Button
              variant='primary'
              type='submit'
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const addressSchema = z.object({
  address_line1: z
    .string()
    .min(2, 'Address line 1 must be at least 2 characters long')
    .max(50, 'Address line 1 must be at least 50 characters long'),
  address_line2: z.string().optional(),
  city: z
    .string()
    .min(2, 'City must be at least 2 characters long')
    .max(50, 'City must be at least 50 characters long'),
  state: z
    .string()
    .min(2, 'State must be at least 2 characters long')
    .max(50, 'State must be at least 50 characters long'),
  postal_code: z
    .string()
    .min(2, 'Postal code must be at least 2 characters long')
    .max(50, 'Postal code must be at least 50 characters long'),
});

export type AddressForm = z.infer<typeof addressSchema>;

export default AddAddress;
