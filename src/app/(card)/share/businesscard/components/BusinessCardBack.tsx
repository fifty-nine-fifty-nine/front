import '@/extensions';

import localFont from 'next/font/local';
import Image from 'next/image';
import type { RefObject } from 'react';

import { flexCenter, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { primary, secondary } from '@/styles/ogoo/colors.css';
import { caption, titleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

const JalnanFont = localFont({
  src: '../../../../fonts/Jalnan.ttf',
});

interface Props {
  isPrimary: boolean;
  businessCardFormData: BusinessCardFormData;
  businesscardBackRef: RefObject<HTMLDivElement>;
}

export const BusinessCardBack = ({
  isPrimary,
  businessCardFormData,
  businesscardBackRef,
}: Props) => {
  const isPrimaryColorChange = `mr-0.5 ${isPrimary ? 'text-[#492FA5]' : 'text-[#00643B]'}`;

  return (
    <div className={flexCenter}>
      <div
        ref={businesscardBackRef}
        className={cn(
          flexColCenter,
          JalnanFont.className,
          'relative w-[292px] min-h-[440px] justify-center bg-repeat px-[25px] py-[26px] rounded-xl',
          isPrimary ? 'bg-primary-pattern' : 'bg-secondary-pattern',
        )}
      >
        <div className="bg-white w-full min-h-[382px] rounded-2xl z-10">
          <div className="p-4">
            <h1 className={cn(titleMd, `${isPrimary ? 'text-[#492FA5]' : 'text-[#00643B]'}`)}>
              Profile
            </h1>
            {isPrimary ? (
              <Image
                className="absolute top-10 right-12 z-20"
                src="/svg/dogfoot_primary.svg"
                alt=""
                width={49}
                height={49}
                priority
              />
            ) : (
              <Image
                className="absolute top-10 right-12 z-20"
                src="/svg/dogfoot_sub.svg"
                alt=""
                width={49}
                height={49}
                priority
              />
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
                          {businessCardFormData.mainAllerge?.map((allerge: string) => (
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
                          {businessCardFormData.subAllerge?.map((allerge: string) => (
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
                      <p className={cn(isPrimaryColorChange, 'min-w-[28px]')}>기타:</p>
                      {businessCardFormData.etcAllerge?.length !== 0 ? (
                        <div className="flex flex-wrap gap-0.5">
                          {businessCardFormData.etcAllerge?.map((allerge: string) => (
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
                <p className="break-all">#{businessCardFormData.personalityToPerson}</p>
                <p className="break-all">#{businessCardFormData.personalityAmongAnimals}</p>
              </div>
              <div className="py-4">
                <h2 className={cn(isPrimary ? primary : secondary, 'mb-2')}>선호 및 주의사항!</h2>
                <div className={flexRow}>
                  <p className={cn(isPrimaryColorChange, 'min-w-[28px]')}>선호:</p>
                  <div>
                    {businessCardFormData.petLike.removeEmptyStrings().map((like: string) => (
                      <span key={like}>#{like} </span>
                    ))}
                  </div>
                </div>
                <div className={flexRow}>
                  <p className={cn(isPrimaryColorChange, 'min-w-[52px]')}>주의사항:</p>
                  <div>
                    {businessCardFormData.petHate.removeEmptyStrings().map((hate: string) => (
                      <span key={hate}>#{hate} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {roundType &&
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
          ))} */}
      </div>
    </div>
  );
};
