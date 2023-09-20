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
          'relative w-[281px] min-h-[440px] justify-center',
        )}
      >
        {isPrimary ? (
          <Image className="" src="/img/background_primary.png" alt="" fill priority />
        ) : (
          <Image className="" src="/img/background_sub.png" alt="" fill priority />
        )}
        <></>

        <div className="absolute top-[26px] left-[25px] bg-white w-[231px] min-h-[382px] rounded-2xl z-10">
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
                      <p className={cn(isPrimaryColorChange, 'min-w-[28px]')}>기타:</p>
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
