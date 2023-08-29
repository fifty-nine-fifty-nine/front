import { getServerSession } from 'next-auth';

import { KakaoLogoutButton, UserInfo } from '@/components/auth';
import { authOptions } from '@/lib/auth';
import { flexColCenter } from '@/styles/ogoo';
import { cn } from '@/styles/utils';

export default async function MyPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <section className={cn(flexColCenter, `px-5`)}>
        <p>{session.user?.name}님 반갑습니다</p>
        <KakaoLogoutButton />
        <UserInfo />
      </section>
    );
  }
  return <></>;
}
