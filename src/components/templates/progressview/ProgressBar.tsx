import Image from 'next/image';
import React from 'react';

import { optionalText } from '@/styles/ogoo/colors.css';
import { bodySm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ totalSteps, currentStep }) => {
  const percentComplete = (currentStep / totalSteps) * 100;
  const iconPosition = `calc(100% - ${percentComplete}%)`; // Adjust icon width

  return (
    <>
      <div className="relative">
        <div className="w-full h-2 bg-gray-300">
          <div
            className={`h-full bg-secondary transition-width duration-300 ease-in-out`}
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
        <Image
          className="absolute duration-300 ease-in-out"
          src="/svg/progressicon.svg"
          alt="progress"
          width={32}
          height={34}
          style={{ right: iconPosition, top: '-15px' }}
        />
        <div className={cn(bodySm, `text-right pt-5 pr-5`)}>
          <p className={cn(optionalText, `tracking-widest font-semibold`)}>
            {currentStep}/{totalSteps}
          </p>
        </div>
      </div>
    </>
  );
};
