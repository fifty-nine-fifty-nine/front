'use client';

import { GenerateItem, GenerateView } from '@/components';
import { input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

export const BusinessCardFreindshipView = () => {
  return (
    <GenerateView
      questionNumber={'4'}
      title={'말랑이는 어떤 성격을\n가지고 있나요?'}
      nextLink={'/businesscard/5'}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'말랑이는 사람한테'}>
          <input className={cn(input())} placeholder="ex) 처음 만나도 친근해요"></input>
        </GenerateItem>

        <GenerateItem question={'말랑이는 동물친구들 사이에서'}>
          <input className={cn(input())} placeholder="ex) 낮가림이 심해요"></input>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
