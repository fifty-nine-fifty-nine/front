'use client';

import { button } from '@/styles/ogoo';
import { flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props {
  questionNumber: string;
  title: string;
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export const GenerateView = ({ questionNumber, title, children, onSubmit }: Props) => {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div className={'px-5'}>
        <h2 className={cn(titleMd)}>Q{questionNumber}</h2>
        <h2 className={cn(titleLg, `whitespace-pre-wrap`)}>{title}</h2>
      </div>
      {children}
      <footer
        className={cn(flexColCenter, `absolute left-0 bottom-0 right-0 px-5 pt-3 h-24 bg-white`)}
      >
        <button type="button" className={cn(button(), 'bottom-8')} onClick={onSubmit}>
          <p className={whiteText}>다음</p>
        </button>
      </footer>
    </section>
  );
};
