import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { KakaoLoginButton } from '@/components';
import { Template } from '@/components/templates';
import { authOptions } from '@/lib/auth';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { titleMain } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');
  else
    return (
      <Template withNavbar={false}>
        <section className={cn(flexColCenter, `p-5`)}>
          <h2 className={cn(titleMain, `mt-40`)}>로그인/회원가입</h2>
          <div className={`mb-32 text-center`}>
            <p>오구오구에 가입하고</p>
            <p>반려 가족을 힙하게 소개해보세요</p>
          </div>
          <KakaoLoginButton />
        </section>
      </Template>
    );
}
