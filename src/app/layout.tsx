import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { themeClass } from '@/styles';
import { flexCenter } from '@/styles/ogoo/alignment.css';
import { bgSubPrimary } from '@/styles/ogoo/colors.css';
import { mainContainer } from '@/styles/ogoo/container.css';
import { cn } from '@/utils';

import { NextAuthProvider } from './providers';

const Pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={cn(themeClass, Pretendard.className, flexCenter, bgSubPrimary)}>
        <main
          className={cn(mainContainer, `flex-1 max-w-md relative overflow-hidden drop-shadow-sm`)}
        >
          <NextAuthProvider>{children}</NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
