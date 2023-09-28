'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navbar } from '@/components';
import KaKaoShareButton from '@/components/common/KakaoShareButton';
import { StepBackButton, Template } from '@/components/templates';
import { button } from '@/styles/ogoo';
import { flexCenter, flexColCenter, flexRowCenter } from '@/styles/ogoo/alignment.css';
import { optionalText, subText, subtitleText, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm, titleLg, titleSm } from '@/styles/ogoo/typography.css';
import type { BusinessCardSharedParams } from '@/types';
import { cn } from '@/utils';

interface Props {
  businesscardInfo: BusinessCardSharedParams;
  businesscardData: BusinessCardSharedParams;
}

const BusinessCardResult = ({ businesscardInfo, businesscardData }: Props) => {
  const frontUrl = businesscardInfo.frontPage;
  const backUrl = businesscardInfo.backPage;

  return (
    <>
      <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full z-40`)}>
        <StepBackButton />
      </header>
      <div className="h-[calc(100vh-80px)] flex-col justify-between px-5 mt-[-40px]">
        <div className={cn(flexColCenter)}>
          <h2 className={cn(titleLg, `mb-5 whitespace-pre-wrap`)}>
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
            <div className={cn(flexColCenter, 'gap-5')}>
              <div>
                <h2 className={cn(titleSm, subtitleText)}>공유하기</h2>
                <div className={cn(flexRowCenter, 'gap-4')}>
                  <KaKaoShareButton
                    templateId={98893}
                    requestUrl={`petName=${businesscardInfo.petName}&&frontPage=${businesscardData.frontPage}&&backPage=${businesscardData.backPage}`}
                    thumbImgPath={frontUrl}
                    petName={businesscardInfo.petName}
                  />
                  <Image
                    src="/svg/linkicon.svg"
                    alt=""
                    width={24}
                    height={24}
                    priority
                    // onClick={() => {}}
                  />
                </div>
              </div>
              <button className={cn(whiteText, button({ size: 'sm' }), 'w-[154px]')} type="button">
                명함 저장하기
              </button>
            </div>
            <strong className={cn(bodyLg, subText, `block mt-4 pb-2`)}>유의사항</strong>
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
