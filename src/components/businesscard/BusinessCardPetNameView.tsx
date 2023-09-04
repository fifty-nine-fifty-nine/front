'use client';

import { GenerateItem, GenerateView } from '@/components';
import { button, input } from '@/styles/ogoo';
import { flexCol, flexRow } from '@/styles/ogoo/alignment.css';
import { subText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export const BusinessCardPetNameView = () => {
  return (
    <GenerateView
      questionNumber={'1'}
      title={'집사님의 반려동물에 대해\n알려주세요'}
      nextLink={'/businesscard/2'}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'어떤 반려동물과 함께하고 계신가요?'}>
          <div className={cn(flexCol, 'gap-3')}>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>귀여운 강아지</p>
            </button>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>도도한 고양이</p>
            </button>
          </div>
        </GenerateItem>

        <GenerateItem question={'반려동물의 이름은 무엇인가요?'}>
          <input className={cn(input())} placeholder="ex) 말랑이"></input>
        </GenerateItem>

        <GenerateItem question={'반려동물의 성별은 무엇인가요?'}>
          <div className={cn(flexRow, 'gap-3')}>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>남자아이</p>
            </button>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>여자아이</p>
            </button>
          </div>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
