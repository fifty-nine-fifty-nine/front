import Link from 'next/link';

import { themeVars } from '@/styles';
import { flexCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { blackText, optionalText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

interface Props {
  tabIndex: number;
}

export const TabBar = ({ tabIndex }: Props) => {
  return (
    <nav className={tabbar}>
      <Link href="/" className="flex-1">
        <div className={cn(tabMenu, tabIndex == 0 ? activeTab : optionalText)}>
          <p>펫 명함</p>
        </div>
      </Link>
      <Link href="/?tab=1" className="flex-1">
        <div className={cn(tabMenu, tabIndex == 1 ? activeTab : optionalText)}>
          <p>펫 카드</p>
        </div>
      </Link>
    </nav>
  );
};

const tabbar = cn(flexRowCenter, `w-full`);

const tabMenu = cn(
  flexCenter,
  `${(themeVars.fontWeights.bold, themeVars.fontSizes[18])}
  h-full py-3 hover:bg-neutral-100 ease-in duration-150
`,
);

const activeTab = `${blackText}, font-bold border-b-4 border-primary`;
