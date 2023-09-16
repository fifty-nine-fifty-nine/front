'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

import { flexColCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { dividerColor, optionalText, primary } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
import HomeIcon from '@/svg/home.svg';
import MyPageIcon from '@/svg/mypage.svg';
import { cn } from '@/utils';

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
    <nav className={navbar}>
      <Link href="/" className="flex-1">
        <div className={cn(navbarMenu, tabIndex == 0 ? activeText : optionalText)}>
          <HomeIcon />
          <p>홈</p>
        </div>
      </Link>
      <Link href="/mypage" className="flex-1">
        <div className={cn(navbarMenu, tabIndex == 1 ? activeText : optionalText)}>
          <MyPageIcon />
          <p>마이페이지</p>
        </div>
      </Link>
    </nav>
  );
};

const navbar = cn(
  flexRowCenter,
  dividerColor,
  `w-full bg-white h-[80px]
  border-t border-neutral-300 `,
);

const navbarMenu = cn(
  flexColCenter,
  caption,
  `h-full p-4 select-none hover:bg-neutral-100 transition-all duration-300 ease-in-out`,
);

const activeText = `${primary} font-semibold`;
