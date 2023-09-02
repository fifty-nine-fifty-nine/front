import { GenerateItem, GenerateView } from '@/components';
import { button, input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { subtitleText } from '@/styles/ogoo/colors.css';
import { subtitleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function BusinesscardFive() {
  return (
    <GenerateView
      questionNumber={'5'}
      title={'말랑이에 대해서 알아두면\n좋은 정보를 추가해주세요.'}
      nextLink={'/businesscard'}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'말랑이는 이런 것들을 좋아해요.'}>
          <input className={cn(input())} placeholder="ex) 산책을 좋아해요" />
          <button className={cn(button({ color: 'sub', size: 'sm' }))}>
            <p className={cn(subtitleMd, subtitleText)}>+</p>
          </button>
        </GenerateItem>

        <GenerateItem question={'말랑이에게 이런 점들을 주의해주세요.'}>
          <input className={cn(input())} placeholder="ex) 손 내밀기 금지" />
          <button className={cn(button({ color: 'sub', size: 'sm' }))}>
            <p className={cn(subtitleMd, subtitleText)}>+</p>
          </button>
        </GenerateItem>
      </div>
    </GenerateView>
  );
}
