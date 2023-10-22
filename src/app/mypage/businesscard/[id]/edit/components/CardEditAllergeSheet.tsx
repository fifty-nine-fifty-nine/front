import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import { AllergeListTable } from '@/data';
import { button } from '@/styles/ogoo';
import { flexCenter, flexCol } from '@/styles/ogoo/alignment.css';
import { subText, subtitleText, whiteText } from '@/styles/ogoo/colors.css';
import { subtitle, subtitleMd } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

type UpdateAllergesForForm = Pick<
  BusinessCardFormData,
  'mainAllerge' | 'subAllerge' | 'etcAllerge'
>;

interface Props {
  setSheetOpen: Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<BusinessCardFormData>;
  getValues: UseFormGetValues<BusinessCardFormData>;
}

export const CardEditAllergeSheet = ({ setSheetOpen, setValue, getValues }: Props) => {
  const [updateAllergesForForm, setUpdateAllergesForForm] = useState<UpdateAllergesForForm>({
    mainAllerge: getValues('mainAllerge'),
    subAllerge: getValues('subAllerge'),
    etcAllerge: getValues('etcAllerge'),
  });

  const handleAllergeButtonClickToForm = (
    field: 'mainAllerge' | 'subAllerge' | 'etcAllerge',
    value: string,
  ) => {
    let updatedArray = [...(updateAllergesForForm[field] || [])];

    if (!updatedArray.includes(value)) {
      updatedArray.push(value);
    } else {
      updatedArray = updatedArray.filter((item) => item !== value);
    }

    setUpdateAllergesForForm((prevAllerges) => ({
      ...prevAllerges,
      [field]: updatedArray,
    }));
  };

  const listItem = (allerge: string, field: 'mainAllerge' | 'subAllerge' | 'etcAllerge') =>
    cn(
      button({
        size: 'xs',
        color: updateAllergesForForm[field]?.includes(allerge) ? 'selected' : 'sub',
      }),
      {
        [updateAllergesForForm[field]?.includes(allerge) ? whiteText : subText]: true,
      },
    );

  const onClickConfirmAllergeSheet = () => {
    setValue('mainAllerge', updateAllergesForForm.mainAllerge);
    setValue('subAllerge', updateAllergesForForm.subAllerge);
    setValue('etcAllerge', updateAllergesForForm.etcAllerge);
  };

  const allergeWrap = `flex gap-3 flex-wrap`;

  return (
    <div className="w-full h-full mt-2">
      <div className={'bg-[#F8F9FA] rounded-xl'}>
        <div className={cn(flexCol, `w-full, gap-8 p-4`)}>
          <div className={cn(flexCol, 'gap-3')}>
            <strong className={subtitle}>주 단백질원</strong>
            <div className={allergeWrap}>
              {AllergeListTable.mainAllergeList.map((allerge: string) => (
                <button
                  type="button"
                  key={allerge}
                  value={allerge}
                  className={listItem(allerge, 'mainAllerge')}
                  onClick={() => {
                    handleAllergeButtonClickToForm('mainAllerge', allerge);
                  }}
                >
                  {allerge}
                </button>
              ))}
            </div>
          </div>
          <div className={cn(flexCol, 'gap-3')}>
            <strong className={subtitle}>보조 단백질원</strong>
            <div className={allergeWrap}>
              {AllergeListTable.subAllergeList.map((allerge: string) => (
                <button
                  type="button"
                  key={allerge}
                  value={allerge}
                  className={listItem(allerge, 'subAllerge')}
                  onClick={() => {
                    handleAllergeButtonClickToForm('subAllerge', allerge);
                  }}
                >
                  {allerge}
                </button>
              ))}
            </div>
          </div>
          <div className={cn(flexCol, 'gap-3')}>
            <strong className={subtitle}>기타</strong>
            <div className={allergeWrap}>
              {AllergeListTable.etcAllergeList.map((allerge: string) => (
                <button
                  type="button"
                  key={allerge}
                  value={allerge}
                  className={listItem(allerge, 'etcAllerge')}
                  onClick={() => {
                    handleAllergeButtonClickToForm('etcAllerge', allerge);
                  }}
                >
                  {allerge}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={cn(
              button({ color: 'secondary', size: 'sm' }),
              whiteText,
              'w-full, text-base',
            )}
            onClick={() => {
              onClickConfirmAllergeSheet();
              setSheetOpen(false);
            }}
          >
            알러지 정보 수정하기
          </button>
        </div>

        <button
          type="button"
          className={cn(button({ color: 'sub', size: 'sm' }), 'w-full mt-4')}
          onClick={() => {
            setSheetOpen(false);
          }}
        >
          <p className={cn(flexCenter, subtitleMd, subtitleText)}>
            <Image
              src="/svg/arrow_right.svg"
              alt=""
              width={32}
              height={32}
              priority
              className="py-0.5 rotate-[270deg]"
            />
          </p>
        </button>
      </div>
    </div>
  );
};
