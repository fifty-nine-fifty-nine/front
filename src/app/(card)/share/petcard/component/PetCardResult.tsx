'use client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { StepBackButton } from '@/components/templates';
import { IMAGE_BASE_URL } from '@/constants';
import { button, buttonHover } from '@/styles/ogoo';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { bgSub, optionalText, subText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm, titleLg, titleSm } from '@/styles/ogoo/typography.css';
import type { PetCardResponse, PetCardSharedParams } from '@/types';
import { cn } from '@/utils';

interface Props {
  petCardInfo: PetCardResponse & PetCardSharedParams;
}

export const PetCardResult = ({ petCardInfo }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const descriptionRef = useRef<string | null>();

  useEffect(() => {
    if (searchParams.get('type')) {
      const name = petCardInfo.name;
      const imgPath = petCardInfo.img_url.split('/').slice(4).join('/');
      descriptionRef.current = searchParams.get('description');
      router.replace(`${pathname}?name=${name}&imgPath=${encodeURIComponent(imgPath)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, searchParams]);

  if (searchParams.get('imgPath')) {
    return (
      <>
        <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full`)}>
          <StepBackButton />
        </header>

        <div className="h-full flex-col justify-between px-5">
          <h2 className={cn(titleLg, `mb-3 text-center`)}>펫 카드가 만들어졌어요!</h2>

          <article
            className={cn(
              flexColCenter,
              `relative m-auto mb-6 max-w-[400px] rounded-xl overflow-hidden`,
            )}
          >
            <picture className={`w-[400px] h-[274px] relative`}>
              <Image
                src={`${IMAGE_BASE_URL}${searchParams.get('imgPath')}`}
                width={350}
                height={350}
                alt={`${searchParams.get('name')}의 펫카드`}
                className="min-w-full"
              />
            </picture>

            <div className={cn(bgSub, `sticky bottom-0 left-0 right-0 w-full p-5`)}>
              <strong className="block mb-1">{searchParams.get('name')}</strong>
              <p className={subText}>{descriptionRef.current}</p>
            </div>
          </article>

          <div className="flex-center w-full text-center">
            <h3 className={titleSm}>공유하기</h3>
            <div className="mt-2 my-6">공유아이콘들</div>
            <button className={cn(button({ size: 'sm' }), whiteText, buttonHover, `w-40 m-auto`)}>
              이미지로 저장
            </button>
          </div>

          <div className={`w-full px-1 my-10`}>
            <strong className={cn(bodyLg, subText, `block pb-2`)}>유의사항</strong>
            <ul className={bulletItem}>
              <li>펫 카드는 생성된 후 마이페이지에 저장되지 않습니다.</li>
              <li>생성된 이미지가 마음에 드셨다면 이미지를 다운로드 해주세요.</li>
              <li>하루에 n번만 생성 가능합니다.</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

const bulletItem = cn(bodySm, optionalText, `font-normal list-disc list-inside`);
