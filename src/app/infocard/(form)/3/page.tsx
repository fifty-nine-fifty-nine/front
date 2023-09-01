import Link from 'next/link';

import {
  button,
  flexCol,
  flexColCenter,
  flexRow,
  subText,
  subtitleText,
  titleLg,
  titleMd,
  whiteText,
} from '@/styles/ogoo';
import { cn } from '@/styles/utils';

export default async function InfoCardProcessTwo() {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>Q3</h2>
        <h2 className={cn(titleLg)}>말랑이는 N살이군요!</h2>
        <h2 className={cn(titleLg)}>말랑이에 대해 조금 더 알려주세요!</h2>
      </div>

      <div className={cn(flexCol, 'gap-2')}>
        <p className={cn(subtitleText)}>중성화 여부를 알려주세요.</p>
        <div className={cn(flexRow, 'gap-3')}>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>중성화 했어요</p>
          </button>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>중성화 안했어요</p>
          </button>
        </div>
      </div>

      <div className={cn(flexCol, 'gap-2')}>
        <p className={cn(subtitleText)}>가지고 있는 알러지가 있나요?</p>
        <div className={cn(flexRow, 'gap-3')}>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>알러지가 있어요</p>
          </button>
          <button className={cn(button({ color: 'sub' }))}>
            <p className={cn(subText, `font-normal`)}>알러지가 없어요</p>
          </button>
        </div>
      </div>

      <footer
        className={cn(flexColCenter, `absolute bottom-0 left-0 right-0 px-5 pt-3 h-44 bg-white`)}
      >
        <button className={cn(button())}>
          <Link href={'/infocard/4'}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
