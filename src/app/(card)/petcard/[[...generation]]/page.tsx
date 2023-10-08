'use client';
import { redirect, usePathname } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '../../share/loading';
import { PetCardGeneration } from '../components';

export default function PetBusinessCardPage() {
  const pathname = usePathname();
  if (pathname != '/petcard') {
    redirect('/petcard');
  } else {
    return (
      <Suspense fallback={<Loading />}>
        <PetCardGeneration />
      </Suspense>
    );
  }
}
