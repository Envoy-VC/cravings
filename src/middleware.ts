import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
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
