import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { KakaoLogoutButton, UserInfo } from '@/components';
import { Template } from '@/components/templates';
import { API_BASE_URL } from '@/constants';
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
  bgSub,
  bgTertiary,
  optionalText,
  primary,
  subText,
  whiteText,
} from '@/styles/ogoo/colors.css';
import { bodyMd, bodySm, subtitle, titleLg, titleMd, titleSm } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface BusinesscardWithId extends BusinessCardFormData {
  id: number;
}

export default async function MyPage() {
  const serverSession = await getServerSession(authOptions);

  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  const getMyBusinesscards = async (): Promise<BusinesscardWithId[] | []> => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/businesscards/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      return data as BusinesscardWithId[] | [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const myPetBusinesscardList: BusinesscardWithId[] = await getMyBusinesscards();

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
          {myPetBusinesscardList.length > 0 &&
            myPetBusinesscardList.map((myPetBisinesscard: BusinesscardWithId) => (
              <div
                key={myPetBisinesscard.id}
                className={cn(bgSub, flexColCenter, 'w-[195px] h-[215px] rounded-xl pt-4')}
              >
                <Image
                  src={myPetBisinesscard.petProfileImgPath}
                  alt=""
                  width={100}
                  height={100}
                  priority
                  className={`rounded-full bg-red-400 object-cover w-[100px] h-[100px]`}
                />
                <div className={cn(flexRow, 'items-end gap-1 pt-5 pb-1')}>
                  <p>첫째</p>
                  <p className={cn(subtitle, primary)}>{myPetBisinesscard.petName}</p>
                </div>
                <div className={cn(flexRowCenter, whiteText, 'gap-2')}>
                  <button className={cn(bgTertiary, button({ size: 'xxs' }))}>수정</button>
                  <button className={cn(bgPrimaryActive, button({ size: 'xxs' }))}>공유</button>
                </div>
              </div>
            ))}

          {myPetBusinesscardList.length <= 1 && (
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
          )}
          {myPetBusinesscardList.length === 0 && (
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
          )}
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
            {myPetBusinesscardList.length === 0
              ? '반려동물에게 명함을 만들어주세요!'
              : '펫 명함은 최대 두 마리의 반려동물만 지원되고 있어요.'}
          </p>
        </div>
      </section>
      <section className={cn(bgPrimaryOptional, whiteText, 'h-22 p-5')}>
        <p className={cn(subText, 'text-sm')}>서비스를 사용해주신 가족님들의 의견을 들려주세요</p>
        <button className={cn(subText, bodyMd, flexRowCenter)}>
          <Link href="https://www.naver.com" target="_blank" referrerPolicy="no-referrer">
            <span className="mr-0.5">의견 남기러 가기</span>
          </Link>
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
