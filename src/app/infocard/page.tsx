import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { KakaoLogoutButton, ProgressBar, Tab } from '@/components';
import { authOptions } from '@/lib/auth';
import { button } from '@/styles/ogoo';
import { flexColCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { optionalText, primary, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function InfoCard() {
  const session = await getServerSession(authOptions);

  return (
    <section className={cn(flexColCenter, `px-5 pb-32`)}>
      <header className={cn(`justify-between absolute top-0 left-0 bg-white w-full`)}>
        <div className={cn(`flex flex-row justify-between px-5`)}>
          <div className={cn(flexColCenter)}>
            <h1 className={cn(titleMd, `my-3`)}>안녕하세요!</h1>
            {session?.user?.name ? (
              <div className={cn(flexRowCenter, titleMd)}>
                <h1 className={cn(primary, `underline underline-offset-4 mr-2`)}>
                  {session?.user?.name}
                </h1>
                <h1>집사님</h1>
              </div>
            ) : (
              <div className={cn(flexRowCenter, titleMd)}>
                <Link href={'/login'}>
                  <h1 className="underline underline-offset-4">로그인 하기</h1>
                </Link>
              </div>
            )}
          </div>
          {session?.user?.name && <KakaoLogoutButton />}
        </div>
      </header>
      <Tab />
      <ProgressBar totalSteps={5} currentStep={1} />

      <div>
        <div className={'flex flex-row my-6'}>
          <Image
            className={`mr-8`}
            src="/svg/peticon_1.svg"
            alt=""
            width={31.74}
            height={42.52}
            priority
          />
          <div>
            <p className={bodyLg}>힙하게 반려동물을 자랑하고,</p>
            <p className={cn(optionalText, `text-[13px]`)}>
              사진으로 저장해두고 언제든지 자랑하세요.
            </p>
          </div>
        </div>
        <div className={'flex flex-row my-6'}>
          <Image
            className={`mr-8`}
            src="/svg/peticon_2.svg"
            alt=""
            width={31.74}
            height={42.52}
            priority
          />
          <div>
            <p className={bodyLg}>반려동물의 세세한 정보까지 한눈에 확인하고,</p>
            <p className={cn(optionalText, `text-[13px]`)}>
              반려동물의 기본정보와 추가적으로 유의사항을 작성해 쉽게 확인하며 대비할 수 있어요.
            </p>
          </div>
        </div>
        <div className={'flex flex-row my-6'}>
          <Image
            className={`mr-8`}
            src="/svg/peticon_3.svg"
            alt=""
            width={31.74}
            height={42.52}
            priority
          />
          <div>
            <p className={bodyLg}>빠르고 간편하게!</p>
            <p className={cn(optionalText, `text-[13px]`)}>
              간단한 정보 입력으로 2분만에 무료로 만들 수 있어요.
            </p>
          </div>
        </div>
      </div>
      <footer
        className={cn(flexColCenter, `absolute bottom-0 left-0 right-0 px-5 pt-3 h-44 bg-white`)}
      >
        <button className={cn(button())}>
          <Link href={'/infocard/1'}>
            <p className={whiteText}>2분만에 펫 명함 만들기</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
