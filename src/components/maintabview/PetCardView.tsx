import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { button } from '@/styles/ogoo';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { bgSub, optionalText, subText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  active: boolean;
}

export const PetCardView = ({ active }: Props) => {
  return (
    <section className={cn(active ? show : hide, `block w-full absolute top-0 pt-4 px-5`)}>
      <article
        className={cn(flexColCenter, `overflow-hidden relative m-auto max-w-[400px] rounded-xl `)}
      >
        <picture className="w-[400px] h-[274px] relative">
          <Image
            src="/img/petcard_example_1.png"
            fill
            sizes="100%"
            alt=""
            priority
            className="object-cover"
          />
        </picture>
        <div className={cn(bgSub, `sticky bottom-0 left-0 right-0 w-full p-5`)}>
          <strong className="block mb-1">드림이즈컴트루</strong>
          <p className={subText}>파란 하늘 아래의 바닷가에 수영복을 입고있는 치와와</p>
        </div>
      </article>
      <div className={`w-full px-1 my-7`}>
        <strong className={cn(bodyLg, subText, `block pb-2`)}>유의사항</strong>
        <ul className={bulletItem}>
          <li>펫 카드는 생성된 후 마이페이지에 저장되지 않습니다.</li>
          <li>생성된 이미지가 마음에 드셨다면 이미지를 다운로드 해주세요.</li>
          <li>하루에 n번만 생성 가능합니다.</li>
        </ul>
      </div>
      <footer className={cn(flexColCenter, `pt-3`)}>
        <button className={cn(button(), `mb-8`)}>
          <Link href={'/businesscard/1'}>
            <p className={whiteText}>순식간에 펫 카드 만들기</p>
          </Link>
        </button>
      </footer>
    </section>
  );
};

const show = `ease-in-out duration-300`;
const hide = `invisible scale-90 opacity-0 ease-in-out duration-300`;

const bulletItem = cn(bodySm, optionalText, `font-normal list-disc list-inside`);
