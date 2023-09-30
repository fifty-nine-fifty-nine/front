'use client';
import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';

import { ProgressBar, StepBackButton } from '@/components/templates';
import { usePushStateListener } from '@/hooks';
import { optionalText } from '@/styles/ogoo/colors.css';
import { bodySm } from '@/styles/ogoo/typography.css';
import type { PetCardFormData } from '@/types';
import { cn } from '@/utils';

import * as Step from './views';

export const PetCardGeneration = () => {
  const TOTAL_STEPS = 3;
  const [currentStep, setCurrentStep] = useState('1');

  const methods = useForm<PetCardFormData>();

  usePushStateListener(
    useCallback((url) => {
      if (url) {
        const step = url.toString().split('/')[2];
        setCurrentStep(step);
      }
    }, []),
  );

  return (
    <>
      <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full`)}>
        <div className={'flex flex-row justify-between mx-5 items-center'}>
          <div className="-mt-3 mb-3">
            <StepBackButton
              pathname="/businesscard"
              currentStep={+currentStep}
              setCurrentStep={setCurrentStep}
              shallow={true}
            />
          </div>

          <div className={bodySm}>
            <p className={optionalText}>
              {currentStep} / {TOTAL_STEPS}
            </p>
          </div>
        </div>
        <ProgressBar totalSteps={TOTAL_STEPS} currentStep={+currentStep} />
      </header>

      <FormProvider {...methods}>
        {match(currentStep)
          .with('1', () => <Step.PetCardTypeView />)
          .with('2', () => <Step.PetCardNameView />)
          .with('3', () => <Step.PetCardDescriptionView />)
          .otherwise(() => (
            <></>
          ))}
      </FormProvider>
    </>
  );
};
