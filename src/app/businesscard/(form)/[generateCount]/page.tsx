'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  BusinessCardAllergyView,
  BusinessCardFreindshipView,
  BusinessCardPetNameView,
  BusinessCardPetPhotoView,
  BusinessCardPreferenceView,
} from '@/components';
import type { FormData } from '@/types/businesscardType';

export default function GenerateProgress({ params }: { params: { generateCount: string } }) {
  const currentPage = params.generateCount;

  const [businessCardFormData, setBusinessCardFormData] = useState<FormData>({
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

  const methods = useForm<FormData>();

  useEffect(() => {
    console.log(businessCardFormData);
  }, [businessCardFormData]);

  return (
    <FormProvider {...methods}>
      <div>
        {currentPage === '1' && (
          <BusinessCardPetNameView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentPage === '2' && (
          <BusinessCardPetPhotoView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentPage === '3' && (
          <BusinessCardAllergyView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentPage === '4' && (
          <BusinessCardFreindshipView setBusinessCardFormData={setBusinessCardFormData} />
        )}
        {currentPage === '5' && (
          <BusinessCardPreferenceView setBusinessCardFormData={setBusinessCardFormData} />
        )}
      </div>
    </FormProvider>
  );
}
