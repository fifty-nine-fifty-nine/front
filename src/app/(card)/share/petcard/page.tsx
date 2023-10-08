import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';

import { API_BASE_URL } from '@/constants';
import { authOptions } from '@/lib/auth';
import type { PetCardResponse, PetCardSharedParams } from '@/types';

import Loading from '../loading';
import { PetCardResult } from './component/PetCardResult';

export default async function SharePetCardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;
  const genRequired = !searchParams.imageUrl;

  const fetchPetCard = async () =>
    await fetch(`${API_BASE_URL}/pets/cards`, {
      method: 'POST',
      body: JSON.stringify(searchParams),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res);

  const petCardInfo: PetCardResponse & PetCardSharedParams = genRequired
    ? await fetchPetCard()
    : searchParams;

  return (
    <Suspense fallback={<Loading />}>
      <PetCardResult petCardInfo={petCardInfo} />
    </Suspense>
  );
}
