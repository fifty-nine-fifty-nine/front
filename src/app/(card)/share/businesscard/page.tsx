import { getDownloadURL, ref } from 'firebase/storage';
import React, { Suspense } from 'react';

import { storage } from '@/firebase/fireStore';
import type { BusinessCardSharedParams } from '@/types';

import Loading from '../../loading';
import BusinessCardResult from './components/BusinessCardResult';

export default async function SharePetBusinesscardPage({
  searchParams,
}: {
  searchParams: BusinessCardSharedParams;
}) {
  const businesscardInfo = searchParams; // uuid

  // Create a reference with an initial file path and name
  const frontPath = ref(storage, `businesscard/${businesscardInfo.frontPage}`);
  const backPath = ref(storage, `businesscard/${businesscardInfo.backPage}`);

  //FIXME: url 변경해서 데이터 받아오기
  const front = await getDownloadURL(frontPath);
  const back = await getDownloadURL(backPath);

  return (
    <Suspense fallback={<Loading />}>
      <BusinessCardResult
        businesscardInfo={{ petName: businesscardInfo.petName, frontPage: front, backPage: back }}
      />
    </Suspense>
  );
}
