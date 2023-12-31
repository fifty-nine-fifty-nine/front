import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { KakaoLogoutButton } from '@/components';
import { TabBarViewContainer, Template } from '@/components/templates';
import { authOptions } from '@/lib/auth';
import { flexCol, flexRowBetweenItemsEnd, flexRowItemsEnd } from '@/styles/ogoo/alignment.css';
import { primary } from '@/styles/ogoo/colors.css';
import { titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Template>
      <div className={cn(flexCol, `bg-white`)}>
        <header className={cn(flexRowBetweenItemsEnd, `pl-5 pr-4 h-24 mb-5`)}>
          <div className={cn(flexCol)}>
            <h1 className={cn(titleMd)}>
              <p>안녕하세요!</p>
              {session?.user?.name ? (
                <p className={cn(flexRowItemsEnd)}>
                  <strong className={cn(titleLg, primary, `mr-2`)}>{session?.user?.name}</strong>
                  집사님
                </p>
              ) : (
                <Link href={'/login'}>
                  <p className="leading-10">
                    <span className={cn(primary, `underline underline-offset-4`)}>로그인</span>
                    <span>해주세요</span>
                  </p>
                </Link>
              )}
            </h1>
          </div>
          {session?.user?.name && <KakaoLogoutButton />}
        </header>
        <TabBarViewContainer />
      </div>
    </Template>
  );
}
