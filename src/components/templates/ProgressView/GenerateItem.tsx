'use client';

import { flexCol } from '@/styles/ogoo/alignment.css';
import { subtitleText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

interface Props {
  question: string;
  children: React.ReactNode;
}

export const GenerateItem = ({ question, children }: Props) => {
  return (
    <div className={cn(flexCol, 'gap-2')}>
      <p className={cn(subtitleText)}>{question}</p>
      {children}
    </div>
  );
};
