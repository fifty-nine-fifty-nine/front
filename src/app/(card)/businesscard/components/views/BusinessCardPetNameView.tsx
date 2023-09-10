'use client';

import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { button, input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { secondary, subText } from '@/styles/ogoo/colors.css';
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
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const router = useRouter();

  const handleButtonClickToForm = (field: keyof BusinessCardFormData, value: any) => {
    setValue(field, value);
  };

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data, isValid);

    if (!isValid) {
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
      title={'집사님의 반려동물에 대해\n알려주세요'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <Controller
          name="type"
          control={control}
          rules={{ required: '필수 입력값입니다.' }}
          render={({ field, fieldState }) => (
            <GenerateItem question={'어떤 반려동물과 함께하고 계신가요?'}>
              <div className={cn(flexCol, 'gap-3')}>
                <button
                  type="button"
                  className={cn(button({ color: 'sub' }), {
                    selected: field.value === '강아지',
                  })}
                  onClick={() => {
                    handleButtonClickToForm('type', '강아지');
                  }}
                >
                  <p className={cn(subText, `font-normal`)}>귀여운 강아지</p>
                </button>
                <button
                  type="button"
                  className={cn(button({ color: 'sub' }), {
                    selected: field.value === '고양이',
                  })}
                  onClick={() => {
                    handleButtonClickToForm('type', '고양이');
                  }}
                >
                  <p className={cn(subText, `font-normal`)}>도도한 고양이</p>
                </button>
              </div>
              {fieldState.error && (
                <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
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
                <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
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
              <div className={cn(flexCol, 'gap-3')}>
                <button
                  type="button"
                  className={cn(button({ color: 'sub' }), {
                    selected: field.value === '남자',
                  })}
                  onClick={() => {
                    handleButtonClickToForm('gender', '남자');
                  }}
                >
                  <p className={cn(subText, `font-normal`)}>남자아이</p>
                </button>
                <button
                  type="button"
                  className={cn(button({ color: 'sub' }), {
                    selected: field.value === '여자',
                  })}
                  onClick={() => {
                    handleButtonClickToForm('gender', '여자');
                  }}
                >
                  <p className={cn(subText, `font-normal`)}>여자아이</p>
                </button>
              </div>
              {fieldState.error && (
                <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
              )}
            </GenerateItem>
          )}
        />
      </div>
    </GenerateView>
  );
};
