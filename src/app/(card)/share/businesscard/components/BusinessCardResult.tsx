'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StepBackButton } from '@/components/templates';
import { button } from '@/styles/ogoo';
import { flexCenter, flexColCenter } from '@/styles/ogoo/alignment.css';
import { optionalText, subText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm, titleLg } from '@/styles/ogoo/typography.css';
import type { BusinessCardSharedParams } from '@/types';
import { cn } from '@/utils';

interface Props {
  businesscardInfo: BusinessCardSharedParams;
}

const BusinessCardResult = ({ businesscardInfo }: Props) => {
  const frontUrl = businesscardInfo.frontPage;
  const backUrl = businesscardInfo.backPage;

  return (
    <>
      <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full`)}>
        <StepBackButton />
      </header>
      <div className="h-full flex-col justify-between px-5 mt-[-40px]">
        <div className={cn(flexColCenter)}>
          <h2 className={cn(titleLg, `whitespace-pre-wrap`)}>
            {businesscardInfo.petName} 명함이 완성되었어요!
          </h2>

          <div className={(cn(flexCenter), 'w-[292px] min-h-[440px]')}>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
              <SwiperSlide className="mb-8">
                <div className={flexCenter}>
                  <Image className="" src={frontUrl} alt="" width={292} height={440} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="mb-8">
                <div className={flexCenter}>
                  <Image className="" src={backUrl} alt="" width={292} height={440} priority />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={`w-full px-5 mt-7 mb-10`}>
            <button className={cn(whiteText, button({ size: 'sm' }), 'w-full')} type="button">
              저장
            </button>
            <strong className={cn(bodyLg, subText, `block pb-2`)}>유의사항</strong>
            <ul className={bulletItem}>
              <li>펫 명함은 최대 2개까지만 저장 가능합니다.</li>
              <li>
                이미 2개의 명함을 보유중이신 경우, 둘중 하나를 삭제해야 새 명함을 만들 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCardResult;

const bulletItem = cn(bodySm, optionalText, `font-normal list-disc list-inside`);
