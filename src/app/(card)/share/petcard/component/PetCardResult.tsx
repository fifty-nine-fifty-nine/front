import Image from 'next/image';

import type { PetCardResponse } from '@/types';

export const PetCardResult = ({ petCardInfo }: { petCardInfo: PetCardResponse }) => {
  console.log(petCardInfo);
  return (
    <div>
      <p>{petCardInfo.name}완성!</p>
      <Image
        src={petCardInfo.img_url}
        width={350}
        height={350}
        alt={`${petCardInfo.name}의 펫카드`}
      />
    </div>
  );
};
