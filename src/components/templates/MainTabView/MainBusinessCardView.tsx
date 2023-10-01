'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import { fetcher } from '@/lib/fetcher';
import { button, buttonHover } from '@/styles/ogoo';
import * as A from '@/styles/ogoo/alignment.css';
import { flexColCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { optionalText, subText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  active: boolean;
}

export const MainBusinessCardView = ({ active }: Props) => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalCount = async () => {
      if (accessToken) {
        try {
          const { data } = await fetcher<number>('/pets/check', 'GET', accessToken);
          setTotalCount(data);
        } catch (error) {
          console.error(`Error fetching total count: ${error}`);
        }
      }
    };

    fetchTotalCount();
  }, [accessToken]);

  return (
    <section className={cn(active ? show : hide)}>
      <article
        className={cn(
          flexRowCenter,
          `relative m-auto max-w-[400px] rounded-xl overflow-hidden gap-6`,
        )}
      >
        <picture
          className={`w-[146px] ${
            active ? 'h-[220px]' : 'h-0'
          } relative ease-in duration-200 delay-150`}
        >
          <Image
            src="/img/bussinesscardFront_example.png"
            width={146}
            height={220}
            style={{ width: 'auto', height: 'auto' }}
            alt=""
            priority
            className="object-cover"
          />
        </picture>
        <picture
          className={`w-[146px] ${
            active ? 'h-[225px]' : 'h-0'
          } relative ease-in duration-200 delay-150`}
        >
          <Image
            src="/img/bussinesscardBack_example.png"
            width={146}
            height={220}
            style={{ width: 'auto', height: 'auto' }}
            alt=""
            priority
            className="object-cover"
          />
        </picture>
      </article>
      <div className={`w-full mt-7 mb-10`}>
        <ul className="px-4">
          <li className={'flex flex-row my-6'}>
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
          </li>
          <li className={'flex flex-row my-6'}>
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
          </li>
          <li className={'flex flex-row my-6'}>
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
          </li>
        </ul>
      </div>

      <footer className={cn(flexColCenter, `mb-8`)}>
        {totalCount && totalCount < 2 ? (
          <>
            <Link href={'/businesscard'} className="w-full">
              <button className={cn(button(), buttonHover)}>
                <p className={whiteText}>2분만에 펫 명함 만들기</p>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href={'/mypage'} className="w-full">
              <button className={cn(button(), buttonHover)}>
                <p className={whiteText}>마이페이지로 이동</p>
              </button>
            </Link>
            <div className={cn(A.flexRowCenter, 'gap-2 mt-4 items-center')}>
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
                이미 2개의 펫명함을 보유하고 있어요. 삭제 후 새로 생성 가능합니다.
              </p>
            </div>
          </>
        )}
      </footer>
    </section>
  );
};

const show = `w-full absolute top-0 left-0 right-0 pt-4 px-5 ease-in-out duration-300`;
const hide = `invisible scale-90 opacity-0 ease-in-out duration-300`;
