import { getServerSession } from 'next-auth';

import { KakaoLoginButton, KakaoLogoutButton, UserInfo } from '@/components/auth';
import { authOptions } from '@/lib/auth';
import { flexColCenter, titleMain } from '@/styles/ogoo';
import { cn } from '@/styles/utils';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <section className={cn(flexColCenter, `p-5`)}>
        <p>{session.user?.name}님 반갑습니다</p>
        <KakaoLogoutButton />
        <UserInfo />
      </section>
    );
  }
  return (
    <section className={cn(flexColCenter, `p-5`)}>
      <h2 className={cn(titleMain, `mt-40`)}>로그인/회원가입</h2>
      <div className={`mb-32 text-center`}>
        <p>오구오구에 가입하고</p>
        <p>반려 가족을 힙하게 소개해보세요</p>
      </div>
      <KakaoLoginButton />
    </section>
  );
}