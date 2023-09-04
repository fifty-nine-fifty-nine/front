'use client';

import { usePathname } from 'next/navigation';

import { ProgressBar } from '@/components';

export default function InfoCardFormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPathNumber = parseInt(pathname.split('/')[2]);

  return (
    <>
      <aside className="mt-24">
        <ProgressBar totalSteps={3} currentStep={currentPathNumber} />
      </aside>
      {children}
    </>
  );
}
