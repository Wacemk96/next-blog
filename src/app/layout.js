import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Next Blog by Muhammad Waseeem',
  description: 'Next Blog by Muhammad Waseem',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
