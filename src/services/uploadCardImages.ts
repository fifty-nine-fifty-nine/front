import type { RefObject } from 'react';

import { convertHtmlToBlob, uploadFileToFireStoreAndGetFileName } from '@/utils/image-utils';

type CardType = 'businesscard' | 'petcard';

export const uploadCardImages = async ({
  cardType,
  frontRef,
  backRef,
}: {
  cardType: CardType;
  frontRef: RefObject<HTMLElement>;
  backRef: RefObject<HTMLElement>;
}) => {
  if (!frontRef.current || !backRef.current) return [];

  try {
    const businesscardFront = frontRef.current;
    const businesscardBack = backRef.current;

    const frontBlob = await convertHtmlToBlob(businesscardFront);
    const backBlob = await convertHtmlToBlob(businesscardBack);

    if (!frontBlob || !backBlob) throw new Error('html2canvas 생성 실패');

    const frontFileName = await uploadFileToFireStoreAndGetFileName(cardType, frontBlob);
    const backFileName = await uploadFileToFireStoreAndGetFileName(cardType, backBlob);

    if (!frontFileName || !backFileName) throw new Error('firestore 업로드 실패');

    return [frontFileName, backFileName];
  } catch (error) {
    console.error('Error converting div to image:', error);
    return [];
  }
};
