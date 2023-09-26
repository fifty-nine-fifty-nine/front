import 'swiper/css';
import 'swiper/css/pagination';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import html2canvas from 'html2canvas';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { Dispatch, SetStateAction } from 'react';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid'; //v4 버전 사용

import { BusinessCardBack } from '@/app/(card)/share/businesscard/components/BusinessCardBack';
import { BusinessCardRectangleFront } from '@/app/(card)/share/businesscard/components/BusinessCardRectangleFront';
import { GenerateItem, GenerateView } from '@/components/templates';
import { API_BASE_URL } from '@/constants';
import { storage } from '@/firebase/fireStore';
import { button } from '@/styles/ogoo';
import { flexCenter, flexCol, flexRow } from '@/styles/ogoo/alignment.css';
import { subText, whiteText } from '@/styles/ogoo/colors.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  businessCardFormData: BusinessCardFormData;
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardTempleteView = ({
  businessCardFormData,
  setBusinessCardFormData,
}: Props) => {
  const {
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const businesscardFrontRef = useRef<HTMLDivElement>(null);
  const businesscardBackRef = useRef<HTMLDivElement>(null);

  const [isPrimary, setIsPrimary] = useState<boolean>();
  const [uploadedBusinesscardPath, setUploadedBusinesscardPath] = useState<string[]>([]);

  const router = useRouter();
  const { data: session } = useSession();

  const accessToken = session?.accessToken;
  const petName = getValues('petName');

  const handleBusinesscardUpload = async () => {
    if (!businesscardFrontRef.current || !businesscardBackRef.current) return [];

    try {
      const businesscardFront = businesscardFrontRef.current;
      const businesscardBack = businesscardBackRef.current;

      const frontcanvas = await html2canvas(businesscardFront, { scale: 2 });
      const backcanvas = await html2canvas(businesscardBack, { scale: 2 });

      const _frontblob: Blob = await new Promise<Blob>(async (res, rej) => {
        frontcanvas.toBlob(async (blob) => {
          if (blob) {
            res(blob);
            return;
          }
          rej(new Error('Failed to create blob.'));
        });
      });

      const _backblob: Blob = await new Promise<Blob>(async (res, rej) => {
        backcanvas.toBlob(async (blob) => {
          if (blob) {
            res(blob);
            return;
          }
          rej(new Error('Failed to create blob.'));
        });
      });

      const uploadFrontFileName = uuid() + '.png';
      const storageFrontRef = ref(storage, `businesscard/${uploadFrontFileName}`);
      await uploadBytes(storageFrontRef, _frontblob);
      const downloadFrontURL = await getDownloadURL(storageFrontRef);

      const uploadBackFileName = uuid() + '.png';
      const storageBackRef = ref(storage, `businesscard/${uploadBackFileName}`);
      await uploadBytes(storageBackRef, _backblob);
      const downloadBackURL = await getDownloadURL(storageBackRef);
      setValue('businesscardImgPath', [downloadFrontURL, downloadBackURL]);

      return [uploadFrontFileName, uploadBackFileName];
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
    return [];
  };

  const createBusinesscard = async (data: BusinessCardFormData) => {
    try {
      await fetch(`${API_BASE_URL}/pets/businesscards`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.error('Error creating business card:', error);
    }
  };

  const onSubmit = async () => {
    const [uploadFrontFileName, uploadBackFileName] = await handleBusinesscardUpload();

    await createBusinesscard(watch());

    router.push(
      `/share/businesscard?petName=${petName}&&frontPage=${uploadFrontFileName}&&backPage=${uploadBackFileName}`,
    );
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
            <SwiperSlide className="mb-8">
              <BusinessCardRectangleFront
                businesscardFrontRef={businesscardFrontRef}
                isPrimary={isPrimary!}
                businessCardFormData={businessCardFormData}
              />
            </SwiperSlide>
            <SwiperSlide className="mb-8">
              <BusinessCardBack
                isPrimary={isPrimary!}
                businessCardFormData={businessCardFormData}
                businesscardBackRef={businesscardBackRef}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <GenerateItem question={'오구오구의 컬러 중 선호하는 컬러를 선택해주세요.'}>
          <div className={cn(flexRow, 'gap-3')}>
            <button
              type="button"
              className={cn(button({ color: isPrimary ? 'selected' : 'sub' }))}
              onClick={() => {
                setIsPrimary(true);
              }}
            >
              <p className={cn(isPrimary ? whiteText : subText, `font-normal`)}>파란색</p>
            </button>
            <button
              type="button"
              className={cn(button({ color: !isPrimary ? 'selected' : 'sub' }))}
              onClick={() => {
                setIsPrimary(false);
              }}
            >
              <p className={cn(!isPrimary ? whiteText : subText, `font-normal`)}>초록색</p>
            </button>
          </div>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
