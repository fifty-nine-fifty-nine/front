'use client';
import { useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { button } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { AnimalTypeEnum, type PetCardFormData } from '@/types';
import { cn } from '@/utils';

export const PetCardTypeView = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useFormContext<PetCardFormData>();

  const onSubmit = (data: PetCardFormData) => {
    console.log(data);

    if (!isValid) {
      console.log('invalid');
      return;
    }

    window.history.pushState({}, '', '/petcard/2');
  };

  return (
    <GenerateView
      questionNumber={'1'}
      title={() => '어떤 종류의 펫 카드를\n만들고 싶으신가요?'}
      watch={watch}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'원하는 동물을 선택해주세요.'}>
          <div>
            <label htmlFor="dog" className="block cursor-pointer">
              <input
                {...register('type', { required: true })}
                type="radio"
                id="dog"
                value={AnimalTypeEnum.dog}
                className="hidden peer"
              />
              <button
                type="button"
                className={cn(
                  button({
                    color: watch('type') == AnimalTypeEnum.dog ? 'primary' : 'sub',
                  }),
                  `pointer-events-none peer-checked:text-white transition duration-150 ease-in-out`,
                )}
              >
                <p className={cn(`font-normal`)}>귀여운 강아지</p>
              </button>
            </label>
          </div>

          <div>
            <label htmlFor="cat" className="block cursor-pointer">
              <input
                {...register('type', { required: true })}
                type="radio"
                id="cat"
                value={AnimalTypeEnum.cat}
                className="hidden peer"
              />
              <button
                type="button"
                className={cn(
                  button({
                    color: watch('type') == AnimalTypeEnum.cat ? 'primary' : 'sub',
                  }),
                  `pointer-events-none peer-checked:text-white transition duration-150 ease-in-out`,
                )}
              >
                <p className={cn(`font-normal`)}>도도한 고양이</p>
              </button>
            </label>
          </div>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
