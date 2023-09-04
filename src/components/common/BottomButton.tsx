import Link from 'next/link';
import React from 'react';

import { button } from '@/styles/ogoo';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { subText, whiteText } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

interface Props {
  buttonText: string;
  buttonLink: string;
  bottomGap?: number;
  disabled?: boolean;
}

export const BottomButton = ({
  buttonText,
  buttonLink,
  bottomGap = 0,
  disabled = false,
}: Props) => {
  const buttonStyle = cn(button({ color: disabled ? 'sub' : 'primary' }), !disabled && buttonHover);

  return (
    <footer className={cn(buttonPosition, `bottom-[${bottomGap}px]`)}>
      {disabled ? (
        <button className={cn(buttonStyle, `cursor-default`)}>
          <p className={subText}>{buttonText}</p>
        </button>
      ) : (
        <Link href={buttonLink}>
          <button className={buttonStyle}>
            <p className={whiteText}>{buttonText}</p>
          </button>
        </Link>
      )}
    </footer>
  );
};

const buttonPosition = `${flexColCenter}, fixed left-0 right-0 px-5 mb-8`;
const buttonHover = `hover:opacity-90 transition duration-200 ease-in-out`;
