'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { button } from '@/styles/ogoo';
import { flexCenter, flexColCenter } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { titleLg } from '@/styles/ogoo/typography.css';
import type { BusinessCardSharedParams } from '@/types';
import { cn } from '@/utils';

interface Props {
  businesscardInfo: BusinessCardSharedParams;
}

const BusinessCardKakaoShare = ({ businesscardInfo }: Props) => {
  const frontUrl = businesscardInfo.frontPage;
  const backUrl = businesscardInfo.backPage;
  const router = useRouter();

  return (
    <div className="h-full flex-col justify-between px-5">
      <div className={cn(flexColCenter, 'mt-4')}>
        <h2 className={cn(titleLg, `mb-5 whitespace-pre-wrap`)}>{businesscardInfo.petName} 명함</h2>

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

        <button
          className={cn(whiteText, button({ size: 'sm' }), 'w-[154px]')}
          type="button"
          onClick={() => {
            router.push('/');
          }}
        >
          명함 만들러가기
        </button>
      </div>
    </div>
  );
};

export default BusinessCardKakaoShare;
