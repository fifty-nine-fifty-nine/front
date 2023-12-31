'use client';

import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';

import { ProgressBar, StepBackButton } from '@/components/templates';
import { usePushStateListener } from '@/hooks';
import { optionalText } from '@/styles/ogoo/colors.css';
import { bodySm } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

import * as Step from './views';

export const BusinessCardGeneration = () => {
  const TOTAL_STEPS = 6;
  const [currentStep, setCurrentStep] = useState('1');

  const [businessCardFormData, setBusinessCardFormData] = useState<BusinessCardFormData>({
    type: '',
    petName: '',
    gender: '',
    petProfileImgPath: '',
    birth: '',
    species: '',
    neutralization: false,
    allergy: false,
    mainAllerge: [],
    subAllerge: [],
    etcAllerge: [],
    personalityToPerson: '',
    personalityAmongAnimals: '',
    petLike: [],
    petHate: [],
    businesscardImgPath: [],
  });

  const methods = useForm<BusinessCardFormData>();

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
      <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full z-30`)}>
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
          .with('1', () => (
            <Step.BusinessCardPetNameView setBusinessCardFormData={setBusinessCardFormData} />
          ))
          .with('2', () => (
            <Step.BusinessCardPetPhotoView setBusinessCardFormData={setBusinessCardFormData} />
          ))
          .with('3', () => (
            <Step.BusinessCardAllergyView setBusinessCardFormData={setBusinessCardFormData} />
          ))
          .with('4', () => (
            <Step.BusinessCardFreindshipView setBusinessCardFormData={setBusinessCardFormData} />
          ))
          .with('5', () => (
            <Step.BusinessCardPreferenceView setBusinessCardFormData={setBusinessCardFormData} />
          ))
          .with('6', () => (
            <Step.BusinessCardTempleteView
              businessCardFormData={businessCardFormData}
              setBusinessCardFormData={setBusinessCardFormData}
            />
          ))
          .otherwise(() => (
            <></>
          ))}
      </FormProvider>
    </>
  );
};
