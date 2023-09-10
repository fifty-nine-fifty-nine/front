'use client';

import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { secondary } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardFreindshipView = ({ setBusinessCardFormData }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const router = useRouter();

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data, isValid);

    if (!isValid) {
      console.log('Please enter the required value!');
      return;
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      personalityToPerson: data.personalityToPerson,
      personalityAmongAnimals: data.personalityAmongAnimals,
    }));

    window.history.pushState({}, '', '/businesscard/5');
  };

  return (
    <form>
      <GenerateView
        questionNumber={'4'}
        title={(watch) => `${watch('petName')}는 어떤 성격을\n가지고 있나요?`}
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      >
        <div className={cn(flexCol, 'px-5 gap-8')}>
          <Controller
            name="personalityToPerson"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ fieldState }) => (
              <GenerateItem question={'말랑이는 사람한테'}>
                <input
                  type="text"
                  className={cn(input())}
                  placeholder="ex) 처음 만나도 친근해요"
                  {...register('personalityToPerson')}
                ></input>
                {fieldState.error && (
                  <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />

          <Controller
            name="personalityAmongAnimals"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ fieldState }) => (
              <GenerateItem question={'말랑이는 동물친구들 사이에서'}>
                <input
                  type="text"
                  className={cn(input())}
                  placeholder="ex) 낮가림이 심해요"
                  {...register('personalityAmongAnimals')}
                ></input>
                {fieldState.error && (
                  <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />
        </div>
      </GenerateView>
    </form>
  );
};
