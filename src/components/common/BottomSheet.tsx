import Image from 'next/image';
import React from 'react';

import { button } from '@/styles/ogoo';
import { flexBetween, flexColCenter } from '@/styles/ogoo/alignment.css';
import { whiteText } from '@/styles/ogoo/colors.css';
import { titleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <div
      className={cn(
        `fixed z-10 w-full h-[80%]  bottom-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`,
      )}
    >
      <div className="flex flex-col max-w-2xl  h-full rounded-t-xl bg-slate-400">
        <div className={cn(flexBetween, `h-[66px] border-b border-neutral-300 px-5`)}>
          <h2 className={titleMd}>{title}</h2>
          <button className={'w-6 h-6'} onClick={onClose}>
            <Image
              className={`mb-3`}
              src="/svg/xbutton.svg"
              alt=""
              width={32}
              height={32}
              priority
            />
          </button>
        </div>
        <div className={`px-5 pt-8`}>{children}</div>
        <footer
          className={cn(
            flexColCenter,
            `absolute max-w-2xl left-0 bottom-0 right-0 px-5 pt-3 h-24 `,
          )}
        >
          <button className={cn(button(), 'bottom-8')}>
            <p className={whiteText}>확인</p>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BottomSheet;
