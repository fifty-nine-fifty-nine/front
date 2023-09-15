import localFont from 'next/font/local';
import Image from 'next/image';

import { flexCenter, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { primary, secondary, whiteText } from '@/styles/ogoo/colors.css';
import { bodyLg, caption, titleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { birthFomatter, cn } from '@/utils';

const JalnanFont = localFont({
  src: '../../../../fonts/Jalnan.ttf',
});

interface Props {
  isPrimary: boolean;
  businessCardFormData: BusinessCardFormData;
}

export const BusinessCardRectangleFront = ({ isPrimary, businessCardFormData }: Props) => {
  const isPrimaryColorChange = `mr-0.5 ${isPrimary ? 'text-[#492FA5]' : 'text-[#A04D24]'}`;

  return (
    <div className={flexCenter}>
      <div
        className={cn(
          flexColCenter,
          JalnanFont.className,
          isPrimary
            ? 'relative w-[292px] h-[440px] bg-[#734EF7] rounded-2xl justify-center'
            : 'relative w-[292px] h-[440px] bg-[#FF8038] rounded-2xl justify-center',
        )}
        style={{
          backgroundImage: isPrimary
            ? 'repeating-linear-gradient(90deg, transparent, transparent 23px, #492FA5 25px), repeating-linear-gradient(180deg, transparent, transparent 23px, #492FA5 25px)'
            : 'repeating-linear-gradient(90deg, transparent, transparent 23px, #EA5A2E 25px), repeating-linear-gradient(180deg, transparent, transparent 23px, #EA5A2E 25px)',

          backgroundSize: '50px 50px',
        }}
      >
        <>
          <Image
            className="absolute top-4 right-3"
            src="/svg/ogooLogo.svg"
            alt=""
            width={80}
            height={32}
            priority
            style={{
              filter: isPrimary
                ? 'invert(20%) sepia(27%) saturate(3000%) hue-rotate(242deg) brightness(55%) contrast(120%)'
                : 'invert(32%) sepia(39%) saturate(4000%) hue-rotate(342deg) brightness(40%) contrast(86%)',
            }}
          />
        </>

        <div className="absolute top-14 w-[198px] h-[253px] border-2 border-white z-20">
          <Image
            src={businessCardFormData.petProfileImgPath}
            fill
            className="object-fill"
            alt=""
            priority
          />
          <Image
            className="absolute bottom-0 right-0 z-15 mr-[-20px] mb-[-20px]"
            src="/svg/dogfoot.svg"
            alt=""
            width={49}
            height={49}
            priority
            style={{
              filter: isPrimary
                ? 'invert(20%) sepia(27%) saturate(3000%) hue-rotate(242deg) brightness(55%) contrast(120%)'
                : 'invert(32%) sepia(39%) saturate(4000%) hue-rotate(342deg) brightness(40%) contrast(86%)',
            }}
          />
        </div>
        <div className={cn(whiteText, 'absolute top-80 w-[198px] z-10')}>
          <div className={flexRow}>
            <p className={cn(titleMd, 'mr-2')}>{businessCardFormData.petName}</p>
            {businessCardFormData.gender === '수컷' ? (
              <Image
                src="/svg/male_icon.svg"
                alt=""
                width={24}
                height={24}
                priority
                style={{
                  filter:
                    'invert(100%) sepia(1%) saturate(0%) hue-rotate(314deg) brightness(104%) contrast(100%)',
                }}
              />
            ) : (
              <Image
                className="absolute top-[265px] left-[37px] text-center z-10"
                src="/svg/female_icon.svg"
                alt=""
                width={24}
                height={24}
                priority
                style={{
                  filter:
                    'invert(100%) sepia(1%) saturate(0%) hue-rotate(314deg) brightness(104%) contrast(100%)',
                }}
              />
            )}
          </div>
          <p className={bodyLg}>{birthFomatter(businessCardFormData.birth)}</p>
          <p className={bodyLg}>
            {businessCardFormData.neutralization ? '중성화 수술 O' : '중성화 수술 X'}
          </p>
        </div>

        {isPrimary ? (
          <Image
            className="absolute left-4 top-8 z-30"
            src="/svg/dogmark_purple.svg"
            alt=""
            width={48}
            height={48}
            priority
          />
        ) : (
          <Image
            className="absolute left-4 top-8 z-30"
            src="/svg/dogmark_orange.svg"
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
