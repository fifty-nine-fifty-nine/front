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

export const generateUploadFileName = () => uuid() + '.png';

export const findUrlFromFirestore = async ({
  folderName,
  fileName,
}: {
  folderName: string;
  fileName: string;
}) => {
  const storageRef = ref(storage, `${folderName}/${fileName}`);
  const downloadImgUrl = await getDownloadURL(storageRef);

  return downloadImgUrl;
};

export const uploadFileAndGetUrlFromFirestore = async ({
  folderName,
  fileName,
  file,
}: {
  folderName: string;
  fileName: string;
  file: Blob | Uint8Array | ArrayBuffer;
}) => {
  const storageRef = ref(storage, `${folderName}/${fileName}`);
  await uploadBytes(storageRef, file);
  const downloadImgUrl = await getDownloadURL(storageRef);

  return downloadImgUrl;
};

export const uploadFileToFireStoreAndGetFileName = async (
  folderName: string,
  imgFile: Blob | Uint8Array | ArrayBuffer,
) => {
  if (!imgFile) return;

  try {
    const fileName = generateUploadFileName();
    await uploadFileAndGetUrlFromFirestore({ folderName, fileName, file: imgFile });

    return fileName;
  } catch (e) {
    console.error(e);
  }
};

export const uploadUserImageToFirestore = async (imgFile: Blob | Uint8Array | ArrayBuffer) => {
  if (!imgFile) return;

  try {
    const fileName = generateUploadFileName();
    const imgUrl = await uploadFileAndGetUrlFromFirestore({
      folderName: 'businesscardOrigin',
      fileName,
      file: imgFile,
    });

    return imgUrl;
  } catch (e) {
    console.error(e);
  }
};
