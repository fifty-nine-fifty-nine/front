import React, { Suspense } from 'react';

import type { BusinessCardSharedParams } from '@/types';
import { findUrlFromFirestore } from '@/utils/image-utils';

import Loading from '../loading';
import BusinessCardResult from './components/BusinessCardResult';

export default async function SharePetBusinesscardPage({
  searchParams,
}: {
  searchParams: BusinessCardSharedParams;
}) {
  const businesscardInfo = searchParams; // uuid

  const frontPathname = await findUrlFromFirestore({
    folderName: 'businesscard',
    fileName: businesscardInfo.frontPage,
  });
  const backPathname = await findUrlFromFirestore({
    folderName: 'businesscard',
    fileName: businesscardInfo.backPage,
  });

  return (
    <Suspense fallback={<Loading />}>
      <BusinessCardResult
        businesscardInfo={{
          petName: businesscardInfo.petName,
          frontPage: frontPathname,
          backPage: backPathname,
        }}
        businesscardData={businesscardInfo}
      />
    </Suspense>
  );
}
