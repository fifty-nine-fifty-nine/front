import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import html2canvas from 'html2canvas';
import { v4 as uuid } from 'uuid';

import { storage } from '@/firebase/fireStore';

export const convertHtmlToBlob = async (element: HTMLElement) => {
  if (!element) return;

  try {
    const htmlCanvas = await html2canvas(element, { scale: 2 });
    const blob = await new Promise<Blob>(async (res, rej) => {
      htmlCanvas.toBlob(async (blob) => {
        if (blob) {
          res(blob);
          return;
        }
        rej(new Error('Failed to create blob.'));
      });
    });

    return blob;
  } catch (e) {
    console.error(e);
  }
};

export const uploadImageFileToFirestore = async (imgFile: Blob | Uint8Array | ArrayBuffer) => {
  if (!imgFile) return;

  try {
    const uploadFileName = uuid() + '.png';
    const storageRef = ref(storage, `businesscardOrigin/${uploadFileName}`);

    await uploadBytes(storageRef, imgFile);
    const imgUrl = await getDownloadURL(storageRef);

    return imgUrl;
  } catch (e) {
    console.error(e);
  }
};
