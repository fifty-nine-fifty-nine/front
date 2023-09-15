import localFont from 'next/font/local';
import Image from 'next/image';

import { flexCenter, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { primary, secondary } from '@/styles/ogoo/colors.css';
import { caption, titleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

const JalnanFont = localFont({
  src: '../../../../fonts/Jalnan.ttf',
});

interface Props {
  roundType: boolean;
  isPrimary: boolean;
  businessCardFormData: BusinessCardFormData;
}

export const BusinessCardBack = ({ roundType, isPrimary, businessCardFormData }: Props) => {
  const isPrimaryColorChange = `mr-0.5 ${isPrimary ? 'text-[#492FA5]' : 'text-[#A04D24]'}`;

  return (
    <div className={flexCenter}>
      <div
        className={cn(
          flexColCenter,
          JalnanFont.className,
          isPrimary
            ? 'relative w-[281px] min-h-[440px] bg-[#734EF7] rounded-2xl justify-center'
            : 'relative w-[281px] min-h-[440px] bg-[#FF8038] rounded-2xl justify-center',
        )}
        style={{
          backgroundImage: roundType
            ? 'none'
            : isPrimary
            ? 'repeating-linear-gradient(90deg, transparent, transparent 23px, #492FA5 25px), repeating-linear-gradient(180deg, transparent, transparent 23px, #492FA5 25px)'
            : 'repeating-linear-gradient(90deg, transparent, transparent 23px, #EA5A2E 25px), repeating-linear-gradient(180deg, transparent, transparent 23px, #EA5A2E 25px)',

          backgroundSize: '50px 50px',
        }}
      >
        {roundType ? (
          <>
            <Image
              className="absolute top-2 left-2"
              src="/svg/star.svg"
              alt=""
              width={15}
              height={15}
              priority
            />
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="/svg/ring.svg"
              alt=""
              width={272}
              height={96}
              priority
            />
          </>
        ) : (
          <></>
        )}

        <div className="bg-white w-[231px] min-h-[382px] rounded-2xl z-20 m-8">
          <div className="p-4">
            <h1 className={cn(titleMd, `${isPrimary ? 'text-[#492FA5]' : 'text-[#A04D24]'}`)}>
              Profile
            </h1>
            {roundType ? (
              <Image
                className="absolute top-14 right-12"
                src="/svg/star.svg"
                alt=""
                width={27}
                height={27}
                priority
                style={{
                  filter: isPrimary
                    ? 'invert(20%) sepia(27%) saturate(3000%) hue-rotate(242deg) brightness(55%) contrast(120%)'
                    : 'invert(32%) sepia(39%) saturate(4000%) hue-rotate(342deg) brightness(60%) contrast(86%)',
                }}
              />
            ) : (
              <>
                <Image
                  className="absolute top-10 right-12"
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
              </>
            )}
            <div className={caption}>
              <div className="py-4">
                <h2 className={cn(isPrimary ? primary : secondary, 'mb-2')}>
                  {businessCardFormData.allergy ? '알러지가 있어요!' : '알러지가 없어요!'}
                </h2>
                {businessCardFormData.allergy && (
                  <>
                    <div className={flexRow}>
                      <p className={cn(isPrimaryColorChange, 'min-w-[67px]')}>주 단백질원:</p>
                      {businessCardFormData.mainAllerge?.length !== 0 ? (
                        <div className="flex flex-wrap gap-0.5">
                          {businessCardFormData.mainAllerge!.map((allerge: string) => (
                            <p key={allerge} className="rounded-lg">
                              #{allerge}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p>#없음</p>
                      )}
                    </div>
                    <div className={flexRow}>
                      <p className={cn(isPrimaryColorChange, 'min-w-[79px]')}>보조 단백질원:</p>
                      {businessCardFormData.subAllerge?.length !== 0 ? (
                        <div className="flex flex-wrap gap-0.5">
                          {businessCardFormData.subAllerge!.map((allerge: string) => (
                            <p key={allerge} className="rounded-lg">
                              #{allerge}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p>#없음</p>
                      )}
                    </div>
                    <div className={flexRow}>
                      <p className={cn(isPrimaryColorChange, 'min-w-[21px]')}>기타:</p>
                      {businessCardFormData.etcAllerge?.length !== 0 ? (
                        <div className="flex flex-wrap gap-0.5">
                          {businessCardFormData.etcAllerge!.map((allerge: string) => (
                            <p key={allerge} className="rounded-lg">
                              #{allerge}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p>#없음</p>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="py-4 border-y border-neutral-300">
                <h2 className={cn(isPrimary ? primary : secondary, 'mb-2')}>성격을 소개할게요!!</h2>
                <p>#{businessCardFormData.personalityToPerson}</p>
                <p>#{businessCardFormData.personalityAmongAnimals}</p>
              </div>
              <div className="py-4">
                <h2 className={cn(isPrimary ? primary : secondary, 'mb-2')}>선호 및 주의사항!</h2>
                <div className={flexRow}>
                  <p className={cn(isPrimaryColorChange, 'min-w-[28px]')}>선호:</p>
                  <div>
                    {businessCardFormData.petLike.map((like: string) => (
                      <p key={like}>#{like}</p>
                    ))}
                  </div>
                </div>
                <div className={flexRow}>
                  <p className={cn(isPrimaryColorChange, 'min-w-[52px]')}>주의사항:</p>
                  <div>
                    {businessCardFormData.petHate.map((hate: string) => (
                      <p key={hate}>#{hate}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {roundType && (
          <Image
            className="absolute bottom-8 right-20 z-30"
            src="/svg/star.svg"
            alt=""
            width={23}
            height={23}
            priority
            style={{
              filter: isPrimary
                ? 'invert(26%) sepia(74%) saturate(3800%) hue-rotate(244deg) brightness(75%) contrast(75%)'
                : 'invert(54%) sepia(84%) saturate(1200%) hue-rotate(335deg) brightness(94%) contrast(101%)',
            }}
          />
        )}
        {roundType &&
          (isPrimary ? (
            <Image
              className="absolute left-4 bottom-2 z-30"
              src="/svg/dogmark_purple.svg"
              alt=""
              width={48}
              height={48}
              priority
            />
          ) : (
            <Image
              className="absolute left-4 bottom-2 z-30"
              src="/svg/dogmark_orange.svg"
              alt=""
              width={48}
              height={48}
              priority
            />
          ))}
      </div>
    </div>
  );
};
