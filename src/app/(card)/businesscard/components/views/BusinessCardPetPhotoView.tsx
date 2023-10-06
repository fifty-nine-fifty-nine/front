'use client';

import Image from 'next/image';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { speciesMock } from '@/data/SpeciesMock';
import { input } from '@/styles/ogoo';
import { flexCenter, flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { bgSub, danger, optionalText } from '@/styles/ogoo/colors.css';
import { caption } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn, isBeforeToday } from '@/utils';
import { uploadUserImageToFirestore } from '@/utils/image-utils';

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardPetPhotoView = ({ setBusinessCardFormData }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();

  const [selectedSpecies, setSelectedSpecies] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<File>();
  const petProfileImgPath = watch('petProfileImgPath');

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImgFile(e.target.files?.[0]);
    }
  };

  const handleSpeciesClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedSpecies(value);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSpeciesInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredString = event.target.value;
    setSelectedSpecies(enteredString);
  };

  useEffect(() => {
    if (imgFile) {
      // Call handleImageUpload when imgFile changes
      const handleImageUpload = async () => {
        const imageUrl = await uploadUserImageToFirestore(imgFile);
        if (imageUrl) setValue('petProfileImgPath', imageUrl);
      };

      handleImageUpload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile]);

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data);

    if (watch('birth') === '' || watch('petProfileImgPath') === '' || watch('species') === '') {
      console.log('Please enter the required value!');
      return;
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      petProfileImgPath: data.petProfileImgPath,
      birth: data.birth,
      species: data.species,
    }));

    window.history.pushState({}, '', '/businesscard/3');
  };

  return (
    <form>
      <GenerateView
        questionNumber={'2'}
        title={() => '함께하는 반려동물에 대해서\n자세히 소개해 주세요!'}
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      >
        <div className={cn(flexCol, 'px-5 pb-36 gap-8')}>
          <Controller
            name="petProfileImgPath"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ fieldState }) => (
              <GenerateItem question={'반려동물의 사진을 추가해주세요.'}>
                <div className={cn(flexCol, 'gap-3')}>
                  <div className={flexColCenter}>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      name="petProfileImgPath"
                      className="hidden"
                      onChange={handleChangeImage}
                    />

                    {petProfileImgPath ? (
                      <div className="w-52 h-52 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={petProfileImgPath}
                            fill
                            className="object-contain"
                            sizes="(max-width: 208px)"
                            alt=""
                            priority
                            onClick={handleClick}
                          />
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleClick}
                        className={cn(bgSub, flexCenter, 'w-32 h-32 rounded-full')}
                      >
                        <p className={cn(optionalText, 'text-[60px] font-light')}>+</p>
                      </button>
                    )}
                  </div>
                  {fieldState.error && (
                    <p className={cn(danger, caption)}>{fieldState.error.message}</p>
                  )}
                </div>
              </GenerateItem>
            )}
          ></Controller>

          <Controller
            name="birth"
            control={control}
            rules={{
              validate: (value) => {
                if (isBeforeToday(value)) {
                  return '과거 시간대를 입력해주세요';
                }

                if (!/^\d{8}$/.test(value)) {
                  return '8자리의 숫자로 입력해주세요.';
                }
              },
            }}
            render={({ fieldState }) => (
              <GenerateItem question={'반려동물의 생일은 언제인가요?'}>
                <input
                  type="text"
                  minLength={8}
                  maxLength={8}
                  pattern="\d{8}"
                  className={cn(input())}
                  placeholder="ex) 20240830"
                  {...register('birth')}
                ></input>
                {fieldState.error && (
                  <p className={cn(danger, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />

          <Controller
            name="species"
            control={control}
            rules={{ required: '필수 입력값입니다.' }}
            render={({ field, fieldState }) => (
              <GenerateItem question={'반려동물의 견종/묘종을 알려주세요.'}>
                <div className="relative">
                  <input
                    className={cn(input())}
                    placeholder="종류를 입력해주세요!"
                    {...register('species')}
                    value={selectedSpecies}
                    onClick={handleSpeciesClick}
                    onChange={handleSpeciesInputChange}
                  />
                  {isDropdownOpen && (
                    <div className="absolute mt-2 bg-gray-100 border border-gray-300 rounded-xl w-full max-h-32 overflow-y-auto shadow-lg z-40">
                      <ul>
                        {watch('type') === '강아지' &&
                          speciesMock.dog
                            .filter((value) => value.includes(selectedSpecies))
                            .map((value) => (
                              <li
                                key={value}
                                onClick={() => handleOptionClick(value)}
                                className="mx-5 py-2 cursor-pointer border-b-2 border-gray"
                              >
                                {value}
                              </li>
                            ))}
                        {watch('type') === '고양이' &&
                          speciesMock.cat
                            .filter((value) => value.includes(selectedSpecies))
                            .map((value) => (
                              <li
                                key={value}
                                onClick={() => handleOptionClick(value)}
                                className="mx-5 py-2 cursor-pointer border-b-2 border-gray"
                              >
                                {value}
                              </li>
                            ))}
                      </ul>
                    </div>
                  )}
                </div>

                {fieldState.error && (
                  <p className={cn(danger, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          />
        </div>
      </GenerateView>
    </form>
  );
};
