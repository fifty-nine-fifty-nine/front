'use client';

import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

import { flexCenter, subText } from '@/styles/ogoo';
import { button } from '@/styles/ogoo/button.css';
import { cn } from '@/styles/utils';

export const KakaoLoginButton = () => {
  return (
    <button
      className={cn(button({ color: 'kakao', size: 'md' }), buttonHover)}
      onClick={() => {
        signIn('kakao', {
          redirect: true,
          callbackUrl: '/',
        });
      }}
    >
      <p className={flexCenter}>
        <Image className={`mr-2`} src="/svg/kakao.svg" alt="" width={18} height={18} priority />
        카카오 로그인
      </p>
    </button>
  );
};

export const KakaoLogoutButton = () => {
  return (
    <button className={cn(subText, `my-5`)} onClick={() => signOut()}>
      로그아웃
    </button>
  );
};

const buttonHover = `hover:bg-yellow-300 ease-in duration-150`;
