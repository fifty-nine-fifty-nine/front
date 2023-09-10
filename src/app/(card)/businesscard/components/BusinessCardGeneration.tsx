'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ProgressBar, StepBackButton } from '@/components/templates';
import { usePushStateListener } from '@/hooks';
import { optionalText } from '@/styles/ogoo/colors.css';
import { bodySm } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

import * as Step from './views';

export const BusinessCardGeneration = () => {
  const pathname = usePathname();
  const TOTAL_STEPS = 5;
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

  // FIXME: 추후 삭제
  useEffect(() => {
    console.log(businessCardFormData);
  }, [pathname, businessCardFormData]);

  return (
    <>
      <header className={cn(`absolute top-0 left-0 right-0 pt-12 bg-white w-full`)}>
        <div className={'flex flex-row justify-between mx-5 items-center'}>
          <StepBackButton
            pathname="/businesscard"
            currentStep={+currentStep}
            setCurrentStep={setCurrentStep}
            shallow={true}
          />

          <div className={bodySm}>
            <p className={optionalText}>
              {currentStep} / {TOTAL_STEPS}
            </p>
          </div>
        </div>
        <ProgressBar totalSteps={TOTAL_STEPS} currentStep={+currentStep} />
      </header>

      <FormProvider {...methods}>
        {currentStep === '1' && (
          <Step.BusinessCardPetNameView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentStep === '2' && (
          <Step.BusinessCardPetPhotoView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentStep === '3' && (
          <Step.BusinessCardAllergyView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentStep === '4' && (
          <Step.BusinessCardFreindshipView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentStep === '5' && (
          <Step.BusinessCardPreferenceView setBusinessCardFormData={setBusinessCardFormData} />
        )}
      </FormProvider>
    </>
  );
};
