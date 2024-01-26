import { NextResponse, type NextRequest } from 'next/server';
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
    return NextResponse.json({ success: true, error: null });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
