'use client';

import { useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import type { PetCardFormData } from '@/types';
import { cn } from '@/utils';

export const PetCardNameView = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useFormContext<PetCardFormData>();

  const onSubmit = (data: PetCardFormData) => {
    if (!isValid) {
      console.log('invalid');
      return;
    }
    window.history.pushState({}, '', '/petcard/3');
  };

  return (
    <GenerateView
      questionNumber={'2'}
      title={(watch) => `${watch('type')}의\n이름을 지어주세요!`}
      watch={watch}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'원하는 이름을 알려주세요.'}>
          <input
            {...register('name', { required: true })}
            className={cn(input())}
            placeholder="ex) 단비"
          ></input>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
