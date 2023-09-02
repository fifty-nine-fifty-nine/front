'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { ProgressBar, Template } from '@/components';
import { optionalText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export default function InfoCardFormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const currentPathNumber = parseInt(pathname.split('/')[2]);

  return (
    <Template withNavbar={false}>
      <div className={`h-screen overflow-y-auto overflow-x-hidden`}>
        <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full`)}>
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
            <div className="text-[13px]">
              <p className={optionalText}>{currentPathNumber} / 5</p>
            </div>
          </div>
          <ProgressBar totalSteps={5} currentStep={currentPathNumber} />
        </header>
        <div className="py-36 px-5">{children}</div>
      </div>
    </Template>
  );
}
