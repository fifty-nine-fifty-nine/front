'use client';

import type { FieldValues, UseFormWatch } from 'react-hook-form';

import { button, buttonHover } from '@/styles/ogoo';
import { flexCol, flexColCenter } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { titleLg, titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface Props<T extends FieldValues> {
  questionNumber: string;
  title: (watch: UseFormWatch<T>) => string;
  children: React.ReactNode;
  watch: UseFormWatch<T>;
  onSubmit: (data: any) => void;
}

export const GenerateView = <T extends FieldValues>({
  questionNumber,
  title,
  children,
  onSubmit,
  watch,
}: Props<T>) => {
  return (
    <section className={cn(flexCol, `gap-8`)}>
      <div className={'px-5'}>
        <h2 className={cn(titleMd)}>Q{questionNumber}</h2>
        <h2 className={cn(titleLg, `whitespace-pre-wrap`)}>{title(watch)}</h2>
      </div>

      {children}

      <footer
        className={cn(flexColCenter, `absolute left-0 bottom-0 right-0 px-5 pt-3 h-24 bg-white`)}
      >
        <button type="button" className={cn(button(), buttonHover)} onClick={onSubmit}>
          <p className={whiteText}>다음</p>
        </button>
      </footer>
    </section>
  );
};
