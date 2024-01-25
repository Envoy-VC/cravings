import createSupabaseServerClient from '~/lib/supabase/server';

export async function POST() {
  const supabase = createSupabaseServerClient();

  const data = await supabase.from('Restaurant').select('*');

  const paths =
    data.data?.map((restaurant) => ({
      slug: restaurant.id,
    })) ?? [];

  return Response.json({ paths });
}
