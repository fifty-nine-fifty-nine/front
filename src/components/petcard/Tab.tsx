'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { themeVars } from '@/styles';
import { flexCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

export const Tab = () => {
  const pathname = usePathname();

  return (
    <nav className={navbar}>
      <Link href="/infocard" className="flex-1">
        <div className={cn(tabMenu, pathname === '/businesscard' && activeTab)}>
          <p>펫 명함</p>
        </div>
      </Link>
      <Link href="/mypage" className="flex-1">
        <div className={cn(tabMenu, pathname === '/mypage' && activeTab)}>
          <p>펫 카드</p>
        </div>
      </Link>
    </nav>
  );
};

const navbar = cn(flexRowCenter, `w-full bg-white h-11 my-5`);

const tabMenu = cn(
  flexCenter,
  `${(themeVars.fontWeights.bold, themeVars.fontSizes[18])}
  h-full hover:bg-neutral-100 ease-in duration-150
`,
);

const activeTab = `border-b-4 border-primary`;
