import '~/styles/globals.css';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

import { GeistSans } from 'geist/font/sans';
import { Navbar, PageProgress } from '~/components/common';
import { Toaster } from '~/components/ui/sonner';

import MobileNavbar from '~/components/common/navbar/mobile';
import { LoadingScreen } from '~/screens';
import Script from 'next/script';

export const metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`font-sans ${GeistSans.variable}`}>
        <ClerkProvider>
          <ClerkLoading>
            <LoadingScreen />
          </ClerkLoading>
          <ClerkLoaded>
            <div className='flex h-screen flex-col'>
              <PageProgress />
              <Navbar />
              <div className='hide-scrollbar h-full overflow-scroll'>
                {children}
              </div>
              <MobileNavbar />
            </div>
          </ClerkLoaded>
        </ClerkProvider>
        <Toaster />
      </body>
      <Script src='https://checkout.razorpay.com/v1/checkout.js' />
    </html>
  );
}
