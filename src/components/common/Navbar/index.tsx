'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

import { optionalText } from '@/styles/ogoo/colors.css';
import HomeIcon from '@/svg/home.svg';
import MyPageIcon from '@/svg/mypage.svg';
import { cn } from '@/utils';

import * as S from './style.css';

interface Props {
  tabIndex?: number;
}

export const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [tabIndex, setTabIndex] = useState(props.tabIndex ?? 0);

  useLayoutEffect(() => {
    if (pathname.startsWith('/mypage')) setTabIndex(1);
  }, [pathname]);

  return (
    <nav className={S.navbar}>
      <Link href="/" className="flex-1">
        <div className={cn(S.navbarMenu, tabIndex == 0 ? S.activeText : optionalText)}>
          <HomeIcon />
          <p>홈</p>
        </div>
      </Link>
      <Link href="/mypage" className="flex-1">
        <div className={cn(S.navbarMenu, tabIndex == 1 ? S.activeText : optionalText)}>
          <MyPageIcon />
          <p>마이페이지</p>
        </div>
      </Link>
    </nav>
  );
};
