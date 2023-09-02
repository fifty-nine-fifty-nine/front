'use client';

import Link from 'next/link';

import { button } from '@/styles/ogoo';
import { flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

type Props = {
  questionNumber: string;
  firstTitle: string;
  secondTitle: string;
  children: React.ReactNode;
  nextLink: string;
};

export const GenerateView = ({
  questionNumber,
  firstTitle,
  secondTitle,
  children,
  nextLink,
}: Props) => {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div>
        <h2 className={cn(titleMd)}>{questionNumber}</h2>
        <h2 className={cn(titleLg)}>{firstTitle}</h2>
        <h2 className={cn(titleLg)}>{secondTitle}</h2>
      </div>
      {children}
      <footer
        className={cn(flexColCenter, `absolute left-0 bottom-0 right-0 px-5 pt-3 h-24 bg-white`)}
      >
        <button className={cn(button(), 'bottom-8')}>
          <Link href={nextLink}>
            <p className={whiteText}>다음</p>
          </Link>
        </button>
      </footer>
    </section>
  );
};
