import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  beforeAuth(req) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-pathname', req.nextUrl.pathname);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },
  publicRoutes: [
    '/',
    '/auth',
    /^\/restaurant.*$/,
    /^\/api.*$/,
    /^\/search.*$/,
    /^\/account.*$/,
    /^\/categories.*$/,
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
