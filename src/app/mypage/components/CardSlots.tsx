import Image from 'next/image';

import { button } from '@/styles/ogoo';
import * as A from '@/styles/ogoo/alignment.css';
import * as C from '@/styles/ogoo/colors.css';
import { subtitle } from '@/styles/ogoo/typography.css';
import type { BusinesscardWithId } from '@/types';
import { cn } from '@/utils';

import { FallbackCardSlot } from './FallbackCardSlot';

export const CardSlots = async ({ data }: { data: Array<BusinesscardWithId> | null }) => {
  const myPetBusinesscardList = data || [];

  return (
    <div className={cn(A.flexRowCenter, 'gap-3')}>
      {myPetBusinesscardList.length > 0 &&
        myPetBusinesscardList.map((myPetBisinesscard: BusinesscardWithId, idx) => (
          <article
            key={myPetBisinesscard.id}
            className={cn(
              C.bgSub,
              A.flexColCenter,
              'w-[183px] h-[210px] rounded-xl pt-4 hover:transform hover:scale-105 transition-all',
            )}
          >
            <Image
              src={myPetBisinesscard.petProfileImgPath}
              alt=""
              width={100}
              height={100}
              priority
              className={`rounded-full bg-gray-300 object-cover w-[100px] h-[100px]`}
            />
            <div className={cn(A.flexRow, 'items-end gap-1 pt-5 pb-1')}>
              <p>{idx == 0 ? '첫째' : '둘째'}</p>
              <p className={cn(subtitle, C.primary)}>{myPetBisinesscard.petName}</p>
            </div>
            <div className={cn(A.flexRowCenter, C.whiteText, 'gap-2')}>
              <button className={cn(C.bgTertiary, button({ size: 'xxs' }))}>수정</button>
              <button className={cn(C.bgPrimaryActive, button({ size: 'xxs' }))}>공유</button>
            </div>
          </article>
        ))}
      {myPetBusinesscardList.length <= 1 && <FallbackCardSlot />}
      {myPetBusinesscardList.length === 0 && <FallbackCardSlot />}
    </div>
  );
};
