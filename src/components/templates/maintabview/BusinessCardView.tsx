import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { button } from '@/styles/ogoo';
import { optionalText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  active: boolean;
}

export const BusinessCardView = ({ active }: Props) => {
  return (
    <>
      <section className={cn(wrapper, active ? show : hide)}>
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
              <p className={cn(optionalText, bodySm)}>사진으로 저장해두고 언제든지 자랑하세요.</p>
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
              <p className={cn(optionalText, bodySm)}>
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
              <p className={cn(optionalText, bodySm)}>
                간단한 정보 입력으로 2분만에 무료로 만들 수 있어요.
              </p>
            </div>
          </li>
        </ul>

        <footer className={bottomButton}>
          <Link href={'/businesscard/1'}>
            <button className={cn(button(), buttonHover)}>
              <p className={whiteText}>2분만에 펫 명함 만들기</p>
            </button>
          </Link>
        </footer>
      </section>
    </>
  );
};

const wrapper = `absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between`;
const show = `ease-in-out duration-300`;
const hide = `invisible scale-90 opacity-0 ease-in-out duration-300`;
const bottomButton = cn(`sticky left-0 right-0 bottom-0 px-5 pt-3 mb-8`);
const buttonHover = `hover:opacity-90 transition duration-200 ease-in-out`;
