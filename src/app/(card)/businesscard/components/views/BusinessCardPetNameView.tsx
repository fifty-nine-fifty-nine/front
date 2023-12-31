'use client';

import type { Dispatch, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { button, input } from '@/styles/ogoo';
import { flexCol, flexRow } from '@/styles/ogoo/alignment.css';
import { danger } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardPetNameView = ({ setBusinessCardFormData }: Props) => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    watch,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const handleButtonClickToForm = (field: keyof BusinessCardFormData, value: any) => {
    setValue(field, value);
  };

  const onSubmit = (data: BusinessCardFormData) => {
    if (watch('type') === '' || watch('petName') === '' || watch('gender') === '') {
      console.log('Please enter the required value!');
      return;
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      type: data.type,
      petName: data.petName,
      gender: data.gender,
    }));

    window.history.pushState({}, '', '/businesscard/2');
  };

  return (
    <GenerateView
      questionNumber={'1'}
      title={() => '집사님의 반려동물에 대해\n알려주세요'}
      onSubmit={handleSubmit(onSubmit)}
      watch={watch}
    >
      <div className={cn(flexCol, 'px-5 pb-36 gap-8')}>
        <Controller
          name="type"
          control={control}
          rules={{ required: '필수 입력값입니다.' }}
          render={({ field, fieldState }) => (
            <GenerateItem question={'어떤 반려동물과 함께하고 계신가요?'}>
              <div className={cn(flexRow, 'gap-3')}>
                <button
                  type="button"
                  className={cn(
                    button({
                      color: watch('type') === '강아지' ? 'selected' : 'sub',
                    }),
                    {
                      selected: field.value === '강아지',
                    },
                  )}
                  onClick={() => {
                    handleButtonClickToForm('type', '강아지');
                  }}
                >
                  <p className={'font-normal'}>귀여운 강아지</p>
                </button>
                <button
                  type="button"
                  className={cn(
                    button({
                      color: watch('type') === '고양이' ? 'selected' : 'sub',
                    }),
                  )}
                  onClick={() => {
                    handleButtonClickToForm('type', '고양이');
                  }}
                >
                  <p className={'font-normal'}>도도한 고양이</p>
                </button>
              </div>
              {fieldState.error && (
                <p className={cn(danger, caption)}>{fieldState.error.message}</p>
              )}
            </GenerateItem>
          )}
        />

        <Controller
          name="petName"
          control={control}
          rules={{ required: '필수 입력값입니다.' }}
          render={({ fieldState }) => (
            <GenerateItem question={'반려동물의 이름은 무엇인가요?'}>
              <input
                type="text"
                className={cn(input())}
                placeholder="ex) 말랑이"
                {...register('petName')}
              ></input>
              {fieldState.error && (
                <p className={cn(danger, caption)}>{fieldState.error.message}</p>
              )}
            </GenerateItem>
          )}
        />

        <Controller
          name="gender"
          control={control}
          rules={{ required: '필수 입력값입니다.' }}
          render={({ field, fieldState }) => (
            <GenerateItem question={'반려동물의 성별은 무엇인가요?'}>
              <div className={cn(flexRow, 'gap-3')}>
                <button
                  type="button"
                  className={cn(
                    button({
                      color: watch('gender') === '수컷' ? 'selected' : 'sub',
                    }),
                  )}
                  onClick={() => {
                    handleButtonClickToForm('gender', '수컷');
                  }}
                >
                  <p className={'font-normal'}>남자아이</p>
                </button>
                <button
                  type="button"
                  className={cn(
                    button({
                      color: watch('gender') === '암컷' ? 'selected' : 'sub',
                    }),
                  )}
                  onClick={() => {
                    handleButtonClickToForm('gender', '암컷');
                  }}
                >
                  <p className={'font-normal'}>여자아이</p>
                </button>
              </div>
              {fieldState.error && (
                <p className={cn(danger, caption)}>{fieldState.error.message}</p>
              )}
            </GenerateItem>
          )}
        />
      </div>
    </GenerateView>
  );
};
