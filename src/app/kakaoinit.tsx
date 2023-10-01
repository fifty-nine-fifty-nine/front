'use client';

import Script from 'next/script';

type Props = {
  children?: React.ReactNode;
};

export default function Kakaoinit({ children }: Props) {
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }}
      />
      {children}
    </>
  );
}
