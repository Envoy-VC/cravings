import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    /^\/restaurant.*/,
    '/search',
    '/account',
    '/partner',
    '/auth',
    /^\/category.*/,
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
