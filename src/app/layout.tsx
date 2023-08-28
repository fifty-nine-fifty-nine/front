import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '5959',
  description: '오구오구에 오신 것을 환영합니다',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
