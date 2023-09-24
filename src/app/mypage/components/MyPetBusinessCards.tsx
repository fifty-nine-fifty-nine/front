import Image from 'next/image';
import { Suspense } from 'react';

import { fetcher } from '@/lib/fetcher';
import * as A from '@/styles/ogoo/alignment.css';
import { subText } from '@/styles/ogoo/colors.css';
import { bodySm, titleSm } from '@/styles/ogoo/typography.css';
import type { BusinesscardWithId } from '@/types';
import { cn } from '@/utils';

import { CardSlots } from './CardSlots';
import { FallbackCardSlot } from './FallbackCardSlot';

export const MyPetBusinessCards = async () => {
  const { data: businessCardsData } = await fetcher<Array<BusinesscardWithId>>(
    '/pets/businesscards/me',
  );

  return (
    <section className={cn(A.flexCol, `px-5 pt-[38px] pb-5 gap-5`)}>
      <h3 className={titleSm}>보유중인 펫 명함</h3>

      <Suspense
        fallback={
          <div className={cn(A.flexRowCenter, 'gap-3')}>
            {Array.from({ length: 2 }, (_, i) => (
              <FallbackCardSlot key={i} />
            ))}
          </div>
        }
      >
        <CardSlots data={businessCardsData} />
      </Suspense>

      <div className={cn(A.flexRowCenter, 'gap-2')}>
        <Image
          src="/svg/warningIcon.svg"
          width={20}
          height={20}
          sizes="100%"
          alt=""
          priority
          className="object-cover z-0"
        />
        <p className={cn(bodySm, subText)}>
          {businessCardsData?.length === 0
            ? '반려동물에게 명함을 만들어주세요!'
            : '펫 명함은 최대 두 마리의 반려동물만 지원되고 있어요.'}
        </p>
      </div>
    </section>
  );
};
