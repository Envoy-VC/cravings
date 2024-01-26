import { NextResponse, type NextRequest } from 'next/server';
import createSupabaseServerClient from '~/lib/supabase/server';
import { clerkClient } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as unknown;

  const { role, userId } = body as {
    role: string;
    userId: string;
  };

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role,
      },
    });
    const supabase = createSupabaseServerClient();

    const { error, status } = await supabase.from('users').insert({
      user_id: userId,
      favourite_restaurants: [],
    });

    if (error) {
      return NextResponse.json({ success: false, error: String(error) });
    }

    const cart = await supabase.from('user_carts').insert({
      user_id: userId,
      items: {
        items: [],
      },
    });

    if (cart.error) {
      return NextResponse.json({
        success: false,
        error: String(cart.error),
      });
    }

    return NextResponse.json({ success: true, error: null });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
