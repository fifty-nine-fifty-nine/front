'use client';
import { redirect, usePathname } from 'next/navigation';

import { PetCardGeneration } from '../components';

export default function PetBusinessCardPage() {
  const pathname = usePathname();
  if (pathname != '/petcard') {
    redirect('/petcard');
  } else {
    return <PetCardGeneration />;
  }
}
