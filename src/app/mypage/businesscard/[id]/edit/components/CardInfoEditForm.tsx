'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { BusinessCardBack } from '@/app/(card)/share/businesscard/components/BusinessCardBack';
import { BusinessCardRectangleFront } from '@/app/(card)/share/businesscard/components/BusinessCardRectangleFront';
import { userProfileImage } from '@/components/auth/UserProfile/style.css';
import { GenerateItem } from '@/components/templates';
import { fetcher } from '@/lib/fetcher';
import { uploadCardImages } from '@/services/uploadCardImages';
import { button, buttonHover, input } from '@/styles/ogoo';
import { flexRow } from '@/styles/ogoo/alignment.css';
import { subText, subtitleText, whiteText } from '@/styles/ogoo/colors.css';
import { subtitle, subtitleMd } from '@/styles/ogoo/typography.css';
import {
  AnimalGenderEnum,
  AnimalTypeEnum,
  type BusinessCardFormData,
  type BusinesscardWithId,
} from '@/types';
import { cn } from '@/utils';
import { uploadUserImageToFirestore } from '@/utils/image-utils';

export const CardInfoEditForm = ({ card }: { card: BusinesscardWithId }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { isValid },
  } = useForm<BusinessCardFormData>();

  const MAX_INPUT_COUNT = 3;
  const [likeInputCount, setLikeInputCount] = useState(card.petLike.length);
  const [hateInputCount, setHateInputCount] = useState(card.petHate.length);

  const [imgFile, setImgFile] = useState<File>();
  const [isPrimary, setIsPrimary] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const businesscardFrontRef = useRef<HTMLDivElement>(null);
  const businesscardBackRef = useRef<HTMLDivElement>(null);

  const handleAddLikeInput = () => {
    if (likeInputCount < 3) {
      setLikeInputCount(likeInputCount + 1);
    }
  };
  const handleAddHateInput = () => {
    if (hateInputCount < 3) {
      setHateInputCount(hateInputCount + 1);
    }
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImgFile(e.target.files?.[0]);
    }
  };

  const onSubmit: SubmitHandler<BusinessCardFormData> = async (formdata) => {
    try {
      setIsLoading(true);

      const [uploadFrontFileName, uploadBackFileName] = await uploadCardImages({
        cardType: 'businesscard',
        frontRef: businesscardFrontRef,
        backRef: businesscardBackRef,
      });

      const res = await fetcher(`/pets/businesscards/${card.id}`, 'PUT', accessToken, {
        ...formdata,
        ...{ businesscardImgPath: [uploadFrontFileName, uploadBackFileName] },
      });

      console.log('성공!', res); // FIXME: 추후 삭제

      let petName: string | undefined;
      let businesscardImgPath: string[] | undefined;

      if (
        typeof res.data === 'object' &&
        res.data !== null &&
        Array.isArray((res.data as any)['businesscardImgPath'])
      ) {
        petName = (res.data as any)['petName'];
        businesscardImgPath = (res.data as any)['businesscardImgPath'];
      }
      const nextUrl = businesscardImgPath
        ? `/share/businesscard?petName=${petName}&frontPage=${businesscardImgPath[0]}&backPage=${businesscardImgPath[1]}`
        : '/mypage';

      router.replace(nextUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reset({ ...card });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  useEffect(() => {
    if (imgFile) {
      const handleImageUpload = async () => {
        const imageUrl = await uploadUserImageToFirestore(imgFile);
        if (imageUrl) setValue('petProfileImgPath', imageUrl);
      };

      handleImageUpload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 gap-y-7">
      <div className="relative m-auto">
        <div className="relative overflow-hidden border-2 border-gray-200 rounded-full aspect-square">
          {watch('petProfileImgPath') && (
            <Image
              src={watch('petProfileImgPath')}
              alt={`${card.petName} 명함 사진`}
              width={112}
              height={112}
              priority
              className={userProfileImage}
            />
          )}
        </div>
        <label htmlFor="petProfileFile">
          <div className="absolute right-1 bottom-0 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 hover:transform hover:scale-110 transition-all cursor-pointer">
            <Image
              src="/svg/edit.svg"
              width={16}
              height={16}
              alt="명함 사진 수정"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </div>
          <input
            type="file"
            accept="image/*"
            id="petProfileFile"
            className="hidden"
            onChange={handleChangeImage}
          />
        </label>
      </div>

      <label>
        <h3 className={subtitle}>이름</h3>
        <input
          type="text"
          className={input()}
          placeholder="ex) 이름을 입력해주세요"
          {...register('petName')}
        />
      </label>

      <label>
        <h3 className={subtitle}>{card.type == AnimalTypeEnum.dog ? '견종' : '묘종'}</h3>
        <input
          type="text"
          className={input()}
          placeholder="ex) 이름을 입력해주세요"
          {...register('species')}
        />
      </label>

      <label>
        <h3 className={subtitle}>생년월일</h3>
        <input type="text" className={input()} placeholder="ex) 20200826" {...register('birth')} />
      </label>

      <div>
        <h3 className={subtitle}>성별</h3>
        <div className="flex gap-3">
          <label htmlFor="male" className="flex-1 block cursor-pointer">
            <input
              {...register('gender', { required: true })}
              type="radio"
              id="male"
              value={AnimalGenderEnum.male}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('gender') == AnimalGenderEnum.male ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>남자아이</p>
            </button>
          </label>
          <label htmlFor="female" className="flex-1 block cursor-pointer">
            <input
              {...register('gender', { required: true })}
              type="radio"
              id="female"
              value={AnimalGenderEnum.female}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('gender') == AnimalGenderEnum.female ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>여자아이</p>
            </button>
          </label>
        </div>
      </div>

      <div>
        <h3 className={subtitle}>중성화</h3>
        <div className="flex gap-3">
          <label htmlFor="neutralization" className="flex-1 block cursor-pointer">
            <input
              type="radio"
              id="neutralization"
              checked={watch('neutralization') === true}
              onChange={() => setValue('neutralization', true)}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('neutralization') === true ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>중성화 했어요</p>
            </button>
          </label>
          <label htmlFor="nonneutralization" className="flex-1 block cursor-pointer">
            <input
              type="radio"
              id="nonneutralization"
              checked={!watch('neutralization')}
              onChange={() => setValue('neutralization', false)}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('neutralization') === false ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>중성화 안했어요</p>
            </button>
          </label>
        </div>
      </div>

      <div>
        <h3 className={subtitle}>알러지</h3>
        <div className="flex gap-3">
          <label htmlFor="allergic" className="flex-1 block cursor-pointer">
            <input
              type="radio"
              id="allergic"
              checked={watch('allergy') == true}
              onChange={() => setValue('allergy', true)}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('allergy') === true ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>알러지 있어요</p>
            </button>
          </label>
          <label htmlFor="nonallergic" className="flex-1 block cursor-pointer">
            <input
              type="radio"
              id="nonallergic"
              checked={!watch('allergy')}
              onChange={() => setValue('allergy', false)}
              className="hidden peer"
            />
            <button
              type="button"
              className={cn(
                button({
                  color: watch('allergy') === false ? 'selected' : 'sub',
                }),
                `pointer-events-none transition duration-150 ease-in-out`,
              )}
            >
              <p className={cn(`font-normal`)}>알러지 없어요</p>
            </button>
          </label>
        </div>
      </div>

      <div>
        <h3 className={subtitle}>성격</h3>
        <div className="flex flex-col gap-y-1">
          <GenerateItem question={`${watch('petName')}는 사람한테`}>
            <input
              type="text"
              className={cn(input())}
              placeholder="ex) 처음 만나도 친근해요"
              {...register('personalityToPerson')}
            ></input>
          </GenerateItem>
          <GenerateItem question={`${watch('petName')}는 동물친구들 사이에서`}>
            <input
              type="text"
              className={cn(input())}
              placeholder="ex) 낮가림이 심해요"
              {...register('personalityAmongAnimals')}
            ></input>
          </GenerateItem>
        </div>
      </div>

      <div>
        <h3 className={subtitle}>선호하는 것</h3>
        <div className="flex flex-col gap-y-1">
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
          {likeInputCount < MAX_INPUT_COUNT && (
            <button
              type="button"
              className={cn(button({ color: 'sub', size: 'sm' }), 'w-full')}
              onClick={handleAddLikeInput}
            >
              <p className={cn(subtitleMd, subtitleText)}>+</p>
            </button>
          )}
        </div>
      </div>

      <div>
        <h3 className={subtitle}>주의사항</h3>
        <div className="flex flex-col gap-y-1">
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
          {hateInputCount < MAX_INPUT_COUNT && (
            <button
              type="button"
              className={cn(button({ color: 'sub', size: 'sm' }), 'w-full')}
              onClick={handleAddHateInput}
            >
              <p className={cn(subtitleMd, subtitleText)}>+</p>
            </button>
          )}
        </div>
      </div>

      <GenerateItem question={'오구오구의 컬러 중 선호하는 컬러를 선택해주세요.'}>
        <div className={cn(flexRow, 'gap-3')}>
          <button
            type="button"
            className={cn(button({ color: isPrimary ? 'primary' : 'sub' }))}
            onClick={() => {
              setIsPrimary(true);
            }}
          >
            <p className={cn(isPrimary ? whiteText : subText, 'font-normal')}>파란색</p>
          </button>
          <button
            type="button"
            className={cn(button({ color: !isPrimary ? 'secondary' : 'sub' }))}
            onClick={() => {
              setIsPrimary(false);
            }}
          >
            <p className={cn(!isPrimary ? whiteText : subText, 'font-normal')}>초록색</p>
          </button>
        </div>
      </GenerateItem>

      {watch('birth') && (
        <section className="absolute bottom-[9999px] right-[9999px]">
          <BusinessCardRectangleFront
            businesscardFrontRef={businesscardFrontRef}
            isPrimary={isPrimary!}
            businessCardFormData={watch()}
          />
          <BusinessCardBack
            isPrimary={isPrimary!}
            businessCardFormData={watch()}
            businesscardBackRef={businesscardBackRef}
          />
        </section>
      )}

      <footer className="my-4">
        <button
          className={cn(
            button(),
            isLoading ? 'opacity-40 select-none cursor-default' : buttonHover,
            'transition-all duration-150 ease-in-out',
          )}
        >
          <p className={whiteText}>저장</p>
        </button>
      </footer>
    </form>
  );
};
