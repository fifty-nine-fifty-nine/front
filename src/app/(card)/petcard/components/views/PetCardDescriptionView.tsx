'use client';
import { useFormContext } from 'react-hook-form';

import { GenerateItem, GenerateView } from '@/components/templates';
import { input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { type PetCardFormData } from '@/types';
import { cn } from '@/utils';

export const PetCardDescriptionView = () => {
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

    console.log('결과 페이지로 이동');
  };

  return (
    <GenerateView
      questionNumber={'3'}
      title={() => `만들고 싶은 카드의\n이미지를 설명해주세요`}
      watch={watch}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'구체적으로 적어주면 원하는 이미지가 나오기 쉬워요.'}>
          <textarea
            {...register('description', { required: true })}
            className={cn(input({ line: 'multiple' }), `viewport resize-none transition`)}
            placeholder="ex) 파란하늘 아래의 바닷가에 수영복을 입고 있는 치와와"
          />
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
