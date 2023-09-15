'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { blob } from 'stream/consumers';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid'; //v4 버전 사용

import { BusinessCardBack } from '@/app/(card)/share/businesscard/components/BusinessCardBack';
import { BusinessCardRectangleFront } from '@/app/(card)/share/businesscard/components/BusinessCardRectangleFront';
import { BusinessCardRoundFront } from '@/app/(card)/share/businesscard/components/BusinessCardRoundFront';
import { GenerateItem, GenerateView } from '@/components/templates';
import { storage } from '@/firebase/fireStore';
import { button } from '@/styles/ogoo';
import { flexCenter, flexCol } from '@/styles/ogoo/alignment.css';
import { subText, whiteText } from '@/styles/ogoo/colors.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  businessCardFormData: BusinessCardFormData;
}

export const BusinessCardTempleteView = ({ businessCardFormData }: Props) => {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const businesscardFrontRef = useRef<HTMLDivElement>(null);
  const businesscardBackRef = useRef<HTMLDivElement>(null);

  const [roundType, setRoundType] = useState<boolean>();
  const [isPrimary, setIsPrimary] = useState<boolean>();
  const [uploadedBusinesscardPath, setUploadedBusinesscardPath] = useState<string[]>([]);

  // const handleBusinesscardUpload = async () => {
  //   if (!businesscardFrontRef.current || !businesscardBackRef.current) return;

  //   try {
  //     const businesscardFront = businesscardFrontRef.current;
  //     const businesscardBack = businesscardBackRef.current;

  //     const frontcanvas = await html2canvas(businesscardFront, { scale: 2 });
  //     const backcanvas = await html2canvas(businesscardBack, { scale: 2 });

  //     console.log(frontcanvas, backcanvas);

  //     frontcanvas.toBlob(async (blob) => {
  //       if (blob !== null) {
  //         const uploadFileName = uuid() + '.png';
  //         const storageRef = ref(storage, `businesscard/${uploadFileName}`);
  //         await uploadBytes(storageRef, blob);
  //         const downloadURL = await getDownloadURL(storageRef);
  //         setUploadedBusinesscardPath((prevPaths) => [...prevPaths, downloadURL]);
  //       }
  //     });
  //     backcanvas.toBlob(async (blob) => {
  //       if (blob !== null) {
  //         const uploadFileName = uuid() + '.png';
  //         const storageRef = ref(storage, `businesscard/${uploadFileName}`);
  //         await uploadBytes(storageRef, blob);
  //         const downloadURL = await getDownloadURL(storageRef);
  //         setUploadedBusinesscardPath((prevPaths) => [...prevPaths, downloadURL]);
  //       }
  //     });
  //     console.log(uploadedBusinesscardPath, '@@@');

  //     setValue('businesscardImgPath', uploadedBusinesscardPath);
  //   } catch (error) {
  //     console.error('Error converting div to image:', error);
  //   }
  // };

  const onSubmit = async (data: BusinessCardFormData) => {
    // await handleBusinesscardUpload();

    console.log(data, '폼데이터 확인');

    // window.history.pushState({}, '', '/share/businesscard');
  };

  return (
    <GenerateView
      questionNumber={'6'}
      title={() => '원하는 명함의 느낌을\n선택해주세요!'}
      onSubmit={handleSubmit(onSubmit)}
      watch={watch}
    >
      <div className={cn(flexCol, 'px-5 pb-36 gap-8')}>
        <div className={cn(flexCenter)}>
          <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
            {roundType ? (
              <SwiperSlide className="mb-8">
                <div ref={businesscardFrontRef}>
                  <BusinessCardRoundFront
                    isPrimary={isPrimary!}
                    businessCardFormData={businessCardFormData}
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide className="mb-8">
                <div ref={businesscardFrontRef}>
                  <BusinessCardRectangleFront
                    isPrimary={isPrimary!}
                    businessCardFormData={businessCardFormData}
                  />
                </div>
              </SwiperSlide>
            )}
            <SwiperSlide className="mb-8">
              <div ref={businesscardBackRef}>
                <BusinessCardBack
                  roundType={roundType!}
                  isPrimary={isPrimary!}
                  businessCardFormData={businessCardFormData}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <GenerateItem question={'어떤 반려동물과 함께하고 계신가요?'}>
          <div className={cn(flexCol, 'gap-3')}>
            <button
              type="button"
              className={cn(button({ color: roundType ? 'selected' : 'sub' }))}
              onClick={() => {
                setRoundType(true);
              }}
            >
              <p className={cn(roundType ? whiteText : subText, `font-normal`)}>라운드형</p>
            </button>
            <button
              type="button"
              className={cn(button({ color: !roundType ? 'selected' : 'sub' }))}
              onClick={() => {
                setRoundType(false);
              }}
            >
              <p className={cn(!roundType ? whiteText : subText, `font-normal`)}>격자형</p>
            </button>
          </div>
        </GenerateItem>

        <GenerateItem question={'오구오구의 컬러 중 선호하는 컬러를 선택해주세요.'}>
          <div className={cn(flexCol, 'gap-3')}>
            <button
              type="button"
              className={cn(button({ color: isPrimary ? 'selected' : 'sub' }))}
              onClick={() => {
                setIsPrimary(true);
              }}
            >
              <p className={cn(isPrimary ? whiteText : subText, `font-normal`)}>보라색</p>
            </button>
            <button
              type="button"
              className={cn(button({ color: !isPrimary ? 'selected' : 'sub' }))}
              onClick={() => {
                setIsPrimary(false);
              }}
            >
              <p className={cn(!isPrimary ? whiteText : subText, `font-normal`)}>주황색</p>
            </button>
          </div>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
