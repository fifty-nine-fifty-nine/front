'use client';

import { useState } from 'react';

import { GenerateItem, GenerateView } from '@/components';
import BottomUpSheet from '@/components/common/BottomSheet';
import { AllergeListTable } from '@/data';
import { button } from '@/styles/ogoo';
import { flexCol, flexRow } from '@/styles/ogoo/alignment.css';
import { subText } from '@/styles/ogoo/colors.css';
import { subtitle } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const BusinessCardAllergyView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const allergySheetOpen = () => {
    setIsOpen(true);
  };

  const allergySheetClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          onClick={allergySheetClose}
          className="fixed top-0 z-5 max-w-md h-screen bg-opacity-50 bg-black backdrop-blur-md"
        ></div>
      )}

      <GenerateView
        questionNumber={'3'}
        title={'말랑이는 N살이군요!\n말랑이에 대해 조금 더 알려주세요!'}
        nextLink={'/businesscard/4'}
      >
        <div className={cn(flexCol, 'px-5 gap-8')}>
          <GenerateItem question={'중성화 여부를 알려주세요.'}>
            <div className={cn(flexRow, 'gap-3')}>
              <button className={cn(button({ color: 'sub' }))}>
                <p className={cn(subText, `font-normal`)}>중성화 했어요</p>
              </button>
              <button className={cn(button({ color: 'sub' }))}>
                <p className={cn(subText, `font-normal`)}>중성화 안했어요</p>
              </button>
            </div>
          </GenerateItem>

          <GenerateItem question={'가지고 있는 알러지가 있나요?'}>
            <div className={cn(flexRow, 'gap-3')}>
              <button className={cn(button({ color: 'sub' }))} onClick={allergySheetOpen}>
                <p className={cn(subText, `font-normal`)}>알러지가 있어요</p>
              </button>
              <button className={cn(button({ color: 'sub' }))}>
                <p className={cn(subText, `font-normal`)}>알러지가 없어요</p>
              </button>
            </div>
          </GenerateItem>
        </div>
        <BottomUpSheet isOpen={isOpen} onClose={allergySheetClose} title={'알러지가 있어요'}>
          <div className={cn(flexCol, `w-full, gap-8`)}>
            <div className={cn(flexCol, 'gap-3')}>
              <strong className={subtitle}>주 단백질원</strong>
              <div className={allergeWrap}>
                {AllergeListTable.mainAllergeList.map((allerge: string) => (
                  <button key={allerge} value={allerge} className={listItem}>
                    {allerge}
                  </button>
                ))}
              </div>
            </div>
            <div className={cn(flexCol, 'gap-3')}>
              <strong className={subtitle}>보조 단백질원</strong>
              <div className={allergeWrap}>
                {AllergeListTable.subAllergeList.map((allerge: string) => (
                  <button key={allerge} value={allerge} className={listItem}>
                    {allerge}
                  </button>
                ))}
              </div>
            </div>
            <div className={cn(flexCol, 'gap-3')}>
              <strong className={subtitle}>기타</strong>
              <div className={allergeWrap}>
                {AllergeListTable.etcAllergeList.map((allerge: string) => (
                  <button key={allerge} value={allerge} className={listItem}>
                    {allerge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </BottomUpSheet>
      </GenerateView>
    </div>
  );
};

const listItem = cn(button({ size: 'xs', color: 'sub' }), subText);
const allergeWrap = `flex gap-3 flex-wrap`;
