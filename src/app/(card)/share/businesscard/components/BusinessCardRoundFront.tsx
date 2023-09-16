import localFont from 'next/font/local';
import Image from 'next/image';

import { flexCenter } from '@/styles/ogoo/alignment.css';
import type { BusinessCardFormData } from '@/types';
import { birthFomatter, cn } from '@/utils';

const ChabFont = localFont({
  src: '../../../../fonts/Jalnan.ttf',
});

interface Props {
  isPrimary: boolean;
  businessCardFormData: BusinessCardFormData;
}

export const BusinessCardRoundFront = ({ isPrimary, businessCardFormData }: Props) => {
  return (
    <div className={flexCenter}>
      <div className={`${ChabFont.className} relative text-xl text-white`}>
        {isPrimary ? (
          <Image
            src="/img/businesscard_round_purple_front.png"
            width={292}
            height={440}
            sizes="100%"
            alt=""
            priority
            className="object-cover z-0"
          />
        ) : (
          <Image
            src="/img/businesscard_round_orange_front.png"
            width={292}
            height={440}
            sizes="100%"
            alt=""
            priority
            className="object-cover z-0"
          />
        )}

        <div className={'absolute top-16 left-10 z-[-1] w-[210px] h-[310px]'}>
          <Image
            src={businessCardFormData.petProfileImgPath}
            fill
            className="object-fill"
            alt=""
            priority
          />
        </div>

        <p className="absolute top-10 left-0 w-full text-center z-10">
          {businessCardFormData.petName}
        </p>
        {businessCardFormData.gender === '수컷' ? (
          <Image
            className="absolute top-[267px] left-[38px] text-center z-10"
            src="/svg/male_icon.svg"
            alt=""
            width={32}
            height={32}
            priority
            style={{
              filter: isPrimary
                ? 'invert(28%) sepia(100%) saturate(1400%) hue-rotate(270deg) brightness(90%) contrast(96%)'
                : 'invert(54%) sepia(84%) saturate(1257%) hue-rotate(335deg) brightness(104%) contrast(101%)',
            }}
          />
        ) : (
          <Image
            className="absolute top-[270px] left-[37px] text-center z-10"
            src="/svg/female_icon.svg"
            alt=""
            width={32}
            height={32}
            priority
            style={{
              filter: isPrimary
                ? 'invert(28%) sepia(100%) saturate(1400%) hue-rotate(270deg) brightness(90%) contrast(96%)'
                : 'invert(54%) sepia(84%) saturate(1257%) hue-rotate(335deg) brightness(104%) contrast(101%)',
            }}
          />
        )}

        <p className="absolute bottom-[48.92px] left-0 w-full text-center z-10">
          {birthFomatter(businessCardFormData.birth)}
        </p>
        <p className="absolute bottom-[12.19px] left-0 w-full text-center z-10 text-base">
          {businessCardFormData.neutralization ? '- 중성화 수술 O -' : '- 중성화 수술 X -'}
        </p>
      </div>
    </div>
  );
};
