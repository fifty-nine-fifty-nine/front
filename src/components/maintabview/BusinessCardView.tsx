import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { button } from '@/styles/ogoo';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { optionalText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  active: boolean;
}

export const BusinessCardView = ({ active }: Props) => {
  return (
    <section className={cn(active ? show : hide, `block w-full absolute top-0 pt-40`)}>
      <ul className="px-8">
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
      <footer className={cn(flexColCenter, `px-5 pt-3`)}>
        <button className={cn(button(), `mb-8`)}>
          <Link href={'/businesscard/1'}>
            <p className={whiteText}>2분만에 펫 명함 만들기</p>
          </Link>
        </button>
      </footer>
    </section>
  );
};

const show = `ease-in-out duration-300`;
const hide = `invisible scale-90 opacity-0 ease-in-out duration-300`;
