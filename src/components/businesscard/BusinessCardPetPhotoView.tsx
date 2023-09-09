'use client';

import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components';
import { input } from '@/styles/ogoo';
import { flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { bgSub, optionalText, secondary } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardPetPhotoView = ({ setBusinessCardFormData }: Props) => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent) => {
    const targetFiles = e.target as HTMLInputElement;
  };

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data, isValid);

    if (!isValid) {
      console.log('Please enter the required value!');
      return;
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      petProfileImgPath: data.petProfileImgPath,
      birth: data.birth,
      species: data.species,
    }));

    router.push('3');
  };

  return (
    <form>
      <GenerateView
        questionNumber={'2'}
        title={'함께하는 반려동물에 대해서\n자세히 소개해 주세요!'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cn(flexCol, 'px-5 gap-8')}>
          <GenerateItem question={'반려동물의 사진을 추가해주세요.'}>
            <div className={cn(flexCol, 'gap-3')}>
              <div className={flexColCenter}>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  name="img_input"
                  onChange={handleChangeImage}
                />
                <button onClick={handleClick} className={cn(bgSub, 'w-32 h-32 rounded-full')}>
                  <p className={cn(optionalText, 'text-[60px] font-light')}>+</p>
                </button>
                <div>{/* <img src={} width="" height="" alt="" /> */}</div>
              </div>
            </div>
          </GenerateItem>

          <Controller
            name="birth"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ fieldState }) => (
              <GenerateItem question={'반려동물의 생일은 언제인가요?'}>
                <input
                  type="number"
                  pattern="\d{8}"
                  className={cn(input())}
                  placeholder="ex) 20240830"
                  {...register('birth')}
                ></input>
                {fieldState.error && (
                  <p className={cn(secondary, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />

          <Controller
            name="species"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ fieldState }) => (
              <GenerateItem question={'반려동물의 견종/묘종을 알려주세요.'}>
                <input
                  className={cn(input())}
                  placeholder="종류를 입력해주세요!"
                  {...register('species')}
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
