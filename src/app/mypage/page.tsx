import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { KakaoLogoutButton, UserInfo } from '@/components';
import { Template } from '@/components/templates';
import { authOptions } from '@/lib/auth';
import { button } from '@/styles/ogoo';
import {
  flexCenter,
  flexCol,
  flexColCenter,
  flexRow,
  flexRowCenter,
} from '@/styles/ogoo/alignment.css';
import {
  bgPrimary,
  bgPrimaryActive,
  bgPrimaryOptional,
  bgPrimarySub,
  bgSecondary,
  bgSub,
  bgTertiary,
  optionalText,
  primary,
  subText,
  whiteText,
} from '@/styles/ogoo/colors.css';
import { bodyMd, bodySm, subtitle, titleLg, titleMd, titleSm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function MyPage() {
  const serverSession = await getServerSession(authOptions);

  const onClickResearch = () => {
    const newTabUrl = 'https://www.naver.com';

    // 새로운 탭 열기
    window.open(newTabUrl, '_blank');
  };

  return (
    <Template>
      <header className={cn(bgPrimary, whiteText, 'h-[221px] pt-5 px-5')}>
        <p className={cn(titleLg)}>마이페이지</p>
        <div className={cn(flexColCenter, 'gap-3')}>
          <UserInfo />
          <div className={cn(flexRow, 'items-end')}>
            {serverSession && <p className={cn(titleMd, 'mr-2')}>{serverSession.user?.name}</p>}
            <p className={subtitle}>집사님</p>
          </div>
        </div>
      </header>

      <section className={cn(flexCol, `px-5 pt-[38px] pb-5 gap-5`)}>
        <p className={titleSm}>보유중인 펫 명함</p>
        <div className={cn(flexRowCenter, 'gap-3')}>
          <div className={cn(bgSub, flexColCenter, 'w-[195px] h-[215px] rounded-xl pt-4')}>
            <Image
              src={''}
              alt=""
              width={100}
              height={100}
              priority
              className={`rounded-full bg-red-400`}
            />
            <div className={cn(flexRow, 'items-end gap-1 pt-5 pb-1')}>
              <p>첫째</p>
              <p className={cn(subtitle, primary)}>드림이</p>
            </div>
            <div className={cn(flexRowCenter, whiteText, 'gap-2')}>
              <button className={cn(bgTertiary, button({ size: 'xxs' }))}>수정</button>
              <button className={cn(bgPrimaryActive, button({ size: 'xxs' }))}>공유</button>
            </div>
          </div>
          <Link href={'/businesscard'} className="w-[195px] h-[215px]">
            <div
              className={cn(
                flexCenter,
                ' w-full h-full rounded-xl border-dashed border-2 border-gray-200',
              )}
            >
              <p className={cn(optionalText, 'text-[60px] font-light')}>+</p>
            </div>
          </Link>
        </div>
        <div className={cn(flexRowCenter, 'gap-2')}>
          <Image
            src="/svg/warningIcon.svg"
            width={20}
            height={20}
            sizes="100%"
            alt=""
            priority
            className="object-cover z-0"
          />
          <p className={cn(bodySm, subText)}>
            펫 명함은 최대 두 마리의 반려동물만 지원되고 있어요.
          </p>
        </div>
      </section>
      <section className={cn(bgPrimaryOptional, whiteText, 'h-22 p-5')}>
        <p className={cn(subText, 'text-sm')}>서비스를 사용해주신 가족님들의 의견을 들려주세요</p>
        <button className={cn(subText, bodyMd, flexRowCenter)}>
          <span className="mr-0.5">의견 남기러 가기</span>
          <Image
            src="/svg/arrow_right.svg"
            alt=""
            width={16}
            height={16}
            priority
            className="py-0.5"
          />
        </button>
      </section>
      <section className={cn(flexCol, `items-start px-5 pt-6`)}>
        <KakaoLogoutButton />
        <p className={cn(subText, bodyMd)}>고객 서비스</p>
        <div className={cn(flexRow, optionalText, `gap-6 my-3`)}>
          <p className={cn(bodySm)}>개인정보 처리방침</p>
          <p className={cn(bodySm)}>이용약관</p>
          <p className={cn(bodySm)}>회원탈퇴</p>
        </div>
      </section>
    </Template>
  );
}
