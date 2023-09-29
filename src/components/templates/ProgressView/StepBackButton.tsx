'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  pathname?: string;
  currentStep?: number;
  setCurrentStep?: (step: string) => void;
  link?: string;
  shallow?: boolean;
  back?: boolean;
}

type PropsWithOptionalFields =
  | (Props & { pathname: string; currentStep: number; setCurrentStep: (step: string) => void })
  | (Props & { link: string })
  | Props;

export const StepBackButton = ({
  pathname,
  currentStep,
  setCurrentStep,
  link = '/',
  shallow = false,
  back = false,
}: PropsWithOptionalFields) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (pathname && currentStep && currentStep > 1 && setCurrentStep) {
          shallow
            ? window.history.pushState({}, '', `${pathname}/${currentStep - 1}`)
            : setCurrentStep(currentStep - 1 + '');
        } else if (back) {
          router.back();
        } else {
          currentStep == 1 ? router.replace(link) : router.push(link);
        }
      }}
    >
      <Image src="/svg/arrow_left.svg" alt="" width={32} height={32} priority />
    </button>
  );
};
