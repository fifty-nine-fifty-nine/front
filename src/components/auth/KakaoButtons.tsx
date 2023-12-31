'use client';

import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

import { button } from '@/styles/ogoo';
import { flexCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { optionalText } from '@/styles/ogoo/colors.css';
import { bodyMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const KakaoLoginButton = () => {
  return (
    <button
      className={cn(button({ color: 'kakao', size: 'md' }), loginHover)}
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
    <button
      className={cn(optionalText, bodyMd, flexRowCenter, logoutHover, `bold py-1`)}
      onClick={() => signOut()}
    >
      <span className="mr-0.5">로그아웃</span>
    </button>
  );
};

const loginHover = `hover:bg-yellow-300 ease-in duration-150`;
const logoutHover = `rounded hover:bg-neutral-100 ease-in duration-150`;
