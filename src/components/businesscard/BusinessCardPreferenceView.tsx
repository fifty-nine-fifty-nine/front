'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components';
import { button, input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { secondary, subtitleText } from '@/styles/ogoo/colors.css';
import { caption, subtitleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardPreferenceView = ({ setBusinessCardFormData }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const [likeInputCount, setLikeInputCount] = useState(1);
  const [hateInputCount, setHateInputCount] = useState(1);

  const maxInputCount = 3;

  const handleAddLikeInput = () => {
    if (likeInputCount < 3) {
      setLikeInputCount(likeInputCount + 1);
    }
  };

  const handleAddHateInput = () => {
    if (hateInputCount < 3) {
      setHateInputCount(hateInputCount + 1); // Increase the input count, but limit it to 3
    }
  };

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data, isValid);

    if (!isValid) {
      console.log('Please enter the required value!');
      return;
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      petLike: data.petLike,
      petHate: data.petHate,
    }));
  };

  return (
    <form>
      <GenerateView
        questionNumber={'5'}
        title={'말랑이에 대해서 알아두면\n좋은 정보를 추가해주세요.'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cn(flexCol, 'px-5 gap-8')}>
          <Controller
            name="petLike"
            control={control}
            rules={{
              validate: (value) => {
                if (value.length === 1 && value[0] === '') {
                  return '좋아하는 것을 하나 이상 입력해주세요.';
                }
              },
            }}
            render={({ fieldState }) => (
              <GenerateItem question={'말랑이는 이런 것들을 좋아해요.'}>
                {[...Array(likeInputCount)].map((_, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      className={cn(input())}
                      placeholder="ex) 산책을 좋아해요"
                      {...register(`petLike.${index}`)}
                    />
                  </div>
                ))}
                {likeInputCount < maxInputCount && (
                  <button
                    type="button"
                    className={cn(button({ color: 'sub', size: 'sm' }))}
                    onClick={handleAddLikeInput}
                  >
                    <p className={cn(subtitleMd, subtitleText)}>+</p>
                  </button>
                )}
                {fieldState.error && (
                  <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />

          <Controller
            name="petHate"
            control={control}
            rules={{
              validate: (value) => {
                if (value.length === 1 && value[0] === '') {
                  return '싫어하는 것을 하나 이상 입력해주세요.';
                }
              },
            }}
            render={({ fieldState }) => (
              <GenerateItem question={'말랑이에게 이런 점들을 주의해주세요.'}>
                {[...Array(hateInputCount)].map((_, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      className={cn(input())}
                      placeholder="ex) 손 내밀기 금지"
                      {...register(`petHate.${index}`)}
                    />
                  </div>
                ))}
                {hateInputCount < maxInputCount && (
                  <button
                    type="button"
                    className={cn(button({ color: 'sub', size: 'sm' }))}
                    onClick={handleAddHateInput}
                  >
                    <p className={cn(subtitleMd, subtitleText)}>+</p>
                  </button>
                )}
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
