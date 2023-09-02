import { getServerSession } from 'next-auth';

import { KakaoLogoutButton, Template, UserInfo } from '@/components';
import { authOptions } from '@/lib/auth';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

export default async function MyPage() {
  const serverSession = await getServerSession(authOptions);

  return (
    <Template>
      <section className={cn(flexColCenter, `px-5`)}>
        <KakaoLogoutButton />
        {serverSession && <p>{serverSession.user?.name}님 반갑습니다</p>}
        <UserInfo />
      </section>
    </Template>
  );
}
