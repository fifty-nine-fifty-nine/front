import type { RefObject } from 'react';

import { convertHtmlToBlob, uploadImageFileToFirestore } from '@/utils/image-utils';

export const uploadBusinessCard = async ({
  frontRef,
  backRef,
}: {
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

    const frontImgUrl = await uploadImageFileToFirestore(frontBlob);
    const backImgUrl = await uploadImageFileToFirestore(backBlob);

    if (!frontImgUrl || !backImgUrl) throw new Error('firestore 업로드 실패');

    return [frontImgUrl, backImgUrl];
  } catch (error) {
    console.error('Error converting div to image:', error);
    return [];
  }
};
