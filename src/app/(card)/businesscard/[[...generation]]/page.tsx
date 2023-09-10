'use client';
import { redirect, usePathname } from 'next/navigation';

import { BusinessCardGeneration } from '../components';

export default function PetBusinessCardPage() {
  const pathname = usePathname();
  if (pathname != '/businesscard') {
    redirect('/businesscard');
  } else {
    return <BusinessCardGeneration />;
  }
}
