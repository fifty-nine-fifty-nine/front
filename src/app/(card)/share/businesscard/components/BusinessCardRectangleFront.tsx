import localFont from 'next/font/local';
import Image from 'next/image';
import type { RefObject } from 'react';

import { flexCenter, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { bodyMd, titleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { birthFomatter, cn } from '@/utils';

const JalnanFont = localFont({
  src: '../../../../fonts/Jalnan.ttf',
});

interface Props {
  isPrimary: boolean;
  businessCardFormData: BusinessCardFormData;
  businesscardFrontRef: RefObject<HTMLDivElement>;
}

export const BusinessCardRectangleFront = ({
  isPrimary,
  businessCardFormData,
  businesscardFrontRef,
}: Props) => {
  return (
    <div className={flexCenter}>
      <div
        ref={businesscardFrontRef}
        className={cn(
          flexColCenter,
          JalnanFont.className,
          'relative w-[292px] h-[440px] justify-center',
        )}
      >
        {isPrimary ? (
          <>
            <Image className="" src="/img/background_primary.png" alt="" fill priority />
            <Image
              className="absolute top-4 right-3"
              src="/svg/nametag_primary.svg"
              alt=""
              width={80}
              height={32}
              priority
            />
          </>
        ) : (
          <>
            <Image className="" src="/img/background_sub.png" alt="" fill priority />
            <Image
              className="absolute top-4 right-3"
              src="/svg/nametag_sub.svg"
              alt=""
              width={80}
              height={32}
              priority
            />
          </>
        )}
        <></>

        <div className="absolute top-14 w-[198px] h-[253px] border-2 border-white z-20">
          <Image
            src={businessCardFormData.petProfileImgPath}
            fill
            className="object-fill"
            alt=""
            priority
          />
          {isPrimary ? (
            <Image
              className="absolute bottom-0 right-0 z-15 mr-[-20px] mb-[-20px]"
              src="/svg/dogfoot_primary.svg"
              alt=""
              width={49}
              height={49}
              priority
            />
          ) : (
            <Image
              className="absolute bottom-0 right-0 z-15 mr-[-20px] mb-[-20px]"
              src="/svg/dogfoot_sub.svg"
              alt=""
              width={49}
              height={49}
              priority
            />
          )}
        </div>
        <div className={cn(whiteText, 'absolute top-80 w-[198px] z-10')}>
          <div className={flexRow}>
            <p className={cn(titleMd, 'mr-2')}>{businessCardFormData.petName}</p>
            {businessCardFormData.gender === '수컷' ? (
              <Image src="/svg/maleicon.svg" alt="" width={24} height={20} priority />
            ) : (
              <Image
                className="absolute top-[265px] left-[37px] text-center z-10"
                src="/svg/femaleicon.svg"
                alt=""
                width={24}
                height={20}
                priority
              />
            )}
          </div>
          <p className={bodyMd}>{birthFomatter(businessCardFormData.birth)}</p>
          <p className={bodyMd}>{businessCardFormData.species}</p>
          <p className={bodyMd}>{businessCardFormData.neutralization ? '중성화 O' : '중성화 X'}</p>
        </div>

        {isPrimary ? (
          <Image
            className="absolute left-4 top-8 z-30"
            src="/svg/dogmark_primary.svg"
            alt=""
            width={48}
            height={48}
            priority
          />
        ) : (
          <Image
            className="absolute left-4 top-8 z-30"
            src="/svg/dogmark_sub.svg"
            alt=""
            width={48}
            height={48}
            priority
          />
        )}
      </div>
    </div>
  );
};
