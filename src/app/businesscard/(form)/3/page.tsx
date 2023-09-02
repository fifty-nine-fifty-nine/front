import { GenerateItem, GenerateView } from '@/components';
import { button } from '@/styles/ogoo';
import { flexRow } from '@/styles/ogoo/alignment.css';
import { subText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export default async function BusinesscardThree() {
  return (
    <GenerateView
      questionNumber={'3'}
      title={'말랑이는 N살이군요!\n말랑이에 대해 조금 더 알려주세요!'}
      nextLink={'/businesscard/4'}
    >
      <GenerateItem question={'중성화 여부를 알려주세요.'}>
        <div className={cn(flexRow, 'gap-3')}>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>중성화 했어요</p>
          </button>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>중성화 안했어요</p>
          </button>
        </div>
      </GenerateItem>

      <GenerateItem question={'가지고 있는 알러지가 있나요?'}>
        <div className={cn(flexRow, 'gap-3')}>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>알러지가 있어요</p>
          </button>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>알러지가 없어요</p>
          </button>
        </div>
      </GenerateItem>
    </GenerateView>
  );
}
