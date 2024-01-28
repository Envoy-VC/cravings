'use client';

import React from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '~/components/ui/button';

import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

const CreateRestaurant = () => {
  const form = useForm<RestaurantType>({
    resolver: zodResolver(restaurantSchema),
  });

  function onSubmit(data: RestaurantType) {
    console.log(data);
    // sleep for 500 ms
    setTimeout(() => {
      toast.success('Sent for Approval');
    }, 1000);

    // form.reset();
  }

  return (
    <div>
      <div className='my-4 text-2xl font-medium'>Create Restaurant</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Restaurant Name</FormLabel>
                <FormControl>
                  <Input placeholder='Restaurant Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='street_address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input placeholder='Street Address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex w-full flex-col gap-3 sm:flex-row'>
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
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
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder='State' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='postal_code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder='Postal Code' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-row gap-3'>
            <div className='flex space-x-4'>
              <FormField
                control={form.control}
                name='opening_hours'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opening Hours</FormLabel>
                    <FormControl>
                      <Input placeholder='Opening Hours' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='closing_hours'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Closing Hours</FormLabel>
                    <FormControl>
                      <Input placeholder='Closing Hours' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name='cuisine_type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cuisine Type</FormLabel>
                <FormControl>
                  <Input placeholder='Cuisine Type' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='website_url'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder='Website URL' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='my-4 flex w-full justify-end'>
            <Button type='submit' variant={'primary'}>
              Create Restaurant
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const restaurantSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  street_address: z.string().min(1),
  cuisine_type: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  postal_code: z.string().min(1),
  website_url: z.string().min(1),
  opening_hours: z.string().min(1),
  closing_hours: z.string().min(1),
});

export type RestaurantType = z.infer<typeof restaurantSchema>;

export default CreateRestaurant;
