'use client';

import { useState } from 'react';

import { GenerateItem, GenerateView } from '@/components';
import { button, input } from '@/styles/ogoo';
import { flexCol } from '@/styles/ogoo/alignment.css';
import { subtitleText } from '@/styles/ogoo/colors.css';
import { subtitleMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const BusinessCardPreferenceView = () => {
  const [likeInputCount, setLikeInputCount] = useState(1); // Initialize with 1 input
  const [unlikeInputCount, setUnLikeInputCount] = useState(1); // Initialize with 1 input

  const maxInputCount = 3;

  const handleAddLikeInput = () => {
    if (likeInputCount < 3) {
      setLikeInputCount(likeInputCount + 1); // Increase the input count, but limit it to 3
    }
  };

  const handleAddUnLikeInput = () => {
    if (unlikeInputCount < 3) {
      setUnLikeInputCount(unlikeInputCount + 1); // Increase the input count, but limit it to 3
    }
  };

  return (
    <GenerateView
      questionNumber={'5'}
      title={'말랑이에 대해서 알아두면\n좋은 정보를 추가해주세요.'}
      nextLink={'/'}
    >
      <div className={cn(flexCol, 'px-5 gap-8')}>
        <GenerateItem question={'말랑이는 이런 것들을 좋아해요.'}>
          {[...Array(likeInputCount)].map((_, index) => (
            <div key={index} className="flex gap-3">
              <input className={cn(input())} placeholder="ex) 산책을 좋아해요" />
            </div>
          ))}
          {likeInputCount < maxInputCount && (
            <button
              className={cn(button({ color: 'sub', size: 'sm' }))}
              onClick={handleAddLikeInput}
            >
              <p className={cn(subtitleMd, subtitleText)}>+</p>
            </button>
          )}
        </GenerateItem>

        <GenerateItem question={'말랑이에게 이런 점들을 주의해주세요.'}>
          {[...Array(unlikeInputCount)].map((_, index) => (
            <div key={index} className="flex gap-3">
              <input className={cn(input())} placeholder="ex) 손 내밀기 금지" />
            </div>
          ))}
          {unlikeInputCount < maxInputCount && (
            <button
              className={cn(button({ color: 'sub', size: 'sm' }))}
              onClick={handleAddUnLikeInput}
            >
              <p className={cn(subtitleMd, subtitleText)}>+</p>
            </button>
          )}
        </GenerateItem>
      </div>
    </GenerateView>
  );
};
