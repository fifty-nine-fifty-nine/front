import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import { themeClass } from '@/styles';
import { flexCenter } from '@/styles/ogoo/alignment.css';
import { bgSubPrimary } from '@/styles/ogoo/colors.css';
import { mainContainer } from '@/styles/ogoo/container.css';
import { cn } from '@/utils';

import { NextAuthProvider } from './providers';

const Pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '5959',
  description: '오구오구에 오신 것을 환영합니다',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="maze-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (m, a, z, e) {
                var s, t;
                try {
                  t = m.sessionStorage.getItem('maze-us');
                } catch (err) {}

                if (!t) {
                  t = new Date().getTime();
                  try {
                    m.sessionStorage.setItem('maze-us', t);
                  } catch (err) {}
                }

                s = a.createElement('script');
                s.src = z + '?t=' + t + '&apiKey=' + e;
                s.async = true;
                a.getElementsByTagName('head')[0].appendChild(s);
                m.mazeUniversalSnippetApiKey = e;
              })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '97e150d1-30f7-4e8b-9568-3037fb36dce3');
            `,
          }}
        />
      </head>

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
