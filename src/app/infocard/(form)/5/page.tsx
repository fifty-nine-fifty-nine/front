import Link from 'next/link';

import { button, input } from '@/styles/ogoo';
import { flexCol, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { subtitleText, whiteText } from '@/styles/ogoo/colors.css';
import { subtitleMd, titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default async function InfoCardProcessFive() {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>Q5</h2>
        <h2 className={cn(titleLg)}>말랑이에 대해서 알아두면</h2>
        <h2 className={cn(titleLg)}>좋은 정보를 추가해주세요</h2>
      </div>

      <div className={cn(flexCol, 'gap-2')}>
        <p className={cn(subtitleText)}>말랑이는 이런 것들을 좋아해요.</p>
        <input className={cn(input())} placeholder="ex) 산책을 좋아해요"></input>
        <button className={cn(button({ color: 'sub', size: 'sm' }))}>
          <p className={cn(subtitleMd, subtitleText)}>+</p>
        </button>
      </div>

      <div className={cn(flexCol, 'gap-2')}>
        <p className={cn(subtitleText)}>말랑이에게 이런 점들을 주의해주세요.</p>
        <div className={cn(flexRow, 'gap-3')}>
          <input className={cn(input())} placeholder="ex) 손 내밀기 금지"></input>
        </div>
      </div>

      <footer
        className={cn(flexColCenter, `absolute bottom-0 left-0 right-0 px-5 pt-3 h-44 bg-white`)}
      >
        <button className={cn(button())}>
          <Link href={'/infocard/5'}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
}
