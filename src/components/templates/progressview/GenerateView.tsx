'use client';

import { BottomButton } from '@/components/common/BottomButton';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  questionNumber: string;
  title: string;
  children: React.ReactNode;
  nextLink: string;
}

export const GenerateView = ({ questionNumber, title, children, nextLink }: Props) => {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div className={'px-5'}>
        <h2 className={cn(titleMd)}>Q{questionNumber}</h2>
        <h2 className={cn(titleLg, `whitespace-pre-wrap`)}>{title}</h2>
      </div>

      {children}

      <footer className={cn(`absolute left-0 bottom-0 right-0 h-24`)}>
        <BottomButton buttonLink={nextLink} buttonText="다음" />
      </footer>
    </section>
  );
};
