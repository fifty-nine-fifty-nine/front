'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Template } from '@/components';
import { cn } from '@/utils';

export default function InfoCardFormLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Template withNavbar={false}>
      <div className={`h-screen overflow-y-auto overflow-x-hidden`}>
        <header className={cn(`absolute top-0 left-0 right-0 pt-12 w-full`)}>
          <div className={'flex flex-row justify-between mx-5 items-center'}>
            <button onClick={() => router.back()}>
              <Image
                className={`mb-3`}
                src="/svg/arrow_left.svg"
                alt=""
                width={32}
                height={32}
                priority
              />
            </button>
          </div>
        </header>
        {children}
      </div>
    </Template>
  );
}
