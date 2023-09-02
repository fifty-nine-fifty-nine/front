'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

import { flexCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { dividerColor, optionalText, primary } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
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
        <div className={cn(navbarMenu, tabIndex == 0 ? primary : optionalText)}>
          <p>홈</p>
        </div>
      </Link>
      <Link href="/mypage" className="flex-1">
        <div className={cn(navbarMenu, tabIndex == 1 ? primary : optionalText)}>
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
  border-t border-neutral-300`,
);

const navbarMenu = cn(
  flexCenter,
  caption,
  `h-full font-normal hover:bg-neutral-100 ease-in duration-150`,
);
