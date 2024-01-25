/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '~/types/database.types';

import { env } from '~/env';

const createSupabaseClient = () => {
  const supabase = createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  return supabase;
};

export default createSupabaseClient;
