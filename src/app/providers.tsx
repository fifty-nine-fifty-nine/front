'use client';

import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export const NextAuthProvider = ({ children }: Props) => {
  useEffect(() => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};
