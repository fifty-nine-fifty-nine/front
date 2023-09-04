import { GenerateItem, GenerateView } from '@/components';
import { button } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { subText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export const PetCardTypeView = () => {
  return (
    <GenerateView
      questionNumber={'1'}
      title={'어떤 종류의 펫 카드를\n만들고 싶으신가요?'}
      nextLink={'/'}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'원하는 동물을 선택해주세요.'}>
          <div className={cn(flexCol, 'gap-3')}>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>귀여운 강아지</p>
            </button>
            <button className={cn(button({ color: 'sub' }))}>
              <p className={cn(subText, `font-normal`)}>도도한 고양이</p>
            </button>
          </div>
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
