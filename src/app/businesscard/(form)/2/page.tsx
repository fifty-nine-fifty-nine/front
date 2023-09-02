'use client';

import { useRef } from 'react';

import { GenerateItem, GenerateView } from '@/components';
import { input } from '@/styles/ogoo';
import { flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { bgSub, optionalText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export default function BusinesscardTwo() {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent) => {
    const targetFiles = e.target as HTMLInputElement;
  };

  return (
    <GenerateView
      questionNumber={'2'}
      title={'함께하는 반려동물에 대해서\n자세히 소개해 주세요!'}
      nextLink={'/businesscard/3'}
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

        <GenerateItem question={'반려동물의 생일은 언제인가요?'}>
          <input className={cn(input())} placeholder="ex) 20240830"></input>
        </GenerateItem>

        <GenerateItem question={'반려동물의 견종/묘종을 알려주세요.'}>
          <input className={cn(input())} placeholder="종류를 입력해주세요!"></input>
        </GenerateItem>
      </div>
    </GenerateView>
  );
}
