'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { BottomSheet } from '@/components';
import { GenerateItem, GenerateView } from '@/components/templates';
import { AllergeListTable } from '@/data';
import { button } from '@/styles/ogoo';
import { flexCol, flexRow } from '@/styles/ogoo/alignment.css';
import { danger, subText, whiteText } from '@/styles/ogoo/colors.css';
import { caption, subtitle } from '@/styles/ogoo/typography.css';
import type { BusinessCardFormData } from '@/types';
import { cn } from '@/utils';

type UpdateAllergesForForm = Pick<
  BusinessCardFormData,
  'mainAllerge' | 'subAllerge' | 'etcAllerge'
>;

interface Props {
  setBusinessCardFormData: Dispatch<SetStateAction<BusinessCardFormData>>;
}

export const BusinessCardAllergyView = ({ setBusinessCardFormData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isValid },
  } = useFormContext<BusinessCardFormData>();
  const [updateAllergesForForm, setUpdateAllergesForForm] = useState<UpdateAllergesForForm>({
    mainAllerge: [],
    subAllerge: [],
    etcAllerge: [],
  });

  const formData = watch();

  const onSubmit = (data: BusinessCardFormData) => {
    console.log(data, isValid);

    if (data.neutralization === null || data.neutralization === null) {
      console.log('Please enter the required value!');
      return;
    } else if (data.allergy) {
      if (!data.mainAllerge?.length && !data.subAllerge?.length && !data.etcAllerge?.length) {
        console.log('There is no allergy information!');
        return;
      }
    }

    setBusinessCardFormData((prevFormData: BusinessCardFormData) => ({
      ...prevFormData,
      neutralization: data.neutralization,
      allergy: data.allergy,
      mainAllerge: data.mainAllerge,
      subAllerge: data.subAllerge,
      etcAllerge: data.etcAllerge,
    }));

    window.history.pushState({}, '', '/businesscard/4');
  };

  const handleButtonClickToForm = (field: keyof BusinessCardFormData, value: any) => {
    setValue(field, value);
  };

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

  const allergySheetOpen = () => {
    setUpdateAllergesForForm(() => ({
      mainAllerge: formData.mainAllerge || [],
      subAllerge: formData.subAllerge || [],
      etcAllerge: formData.etcAllerge || [],
    }));

    setIsOpen(true);
  };

  const onClickConfirmAllergeSheet = () => {
    setValue('mainAllerge', updateAllergesForForm.mainAllerge);
    setValue('subAllerge', updateAllergesForForm.subAllerge);
    setValue('etcAllerge', updateAllergesForForm.etcAllerge);
  };

  const onClickNoAllergy = () => {
    setValue('mainAllerge', []);
    setValue('subAllerge', []);
    setValue('etcAllerge', []);
  };

  const allergySheetClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          onClick={() => allergySheetClose()}
          className="fixed top-0 z-40 w-full h-screen bg-opacity-50 bg-black backdrop-blur-md"
        ></div>
      )}
      <GenerateView
        questionNumber={'3'}
        title={() =>
          `${watch('petName')}는 N살이군요!\n${watch('petName')}에 대해 조금 더 알려주세요!`
        }
        onSubmit={handleSubmit(onSubmit)}
        watch={watch}
      >
        <div className={cn(flexCol, 'px-5 pb-36 gap-8')}>
          <Controller
            name="neutralization"
            control={control}
            rules={{
              validate: (value) => {
                if (value === undefined) {
                  return '중성화 여부는 필수값입니다.';
                }
              },
            }}
            render={({ field, fieldState }) => (
              <GenerateItem question={'중성화 여부를 알려주세요.'}>
                <div className={cn(flexRow, 'gap-3')}>
                  <button
                    type="button"
                    className={cn(
                      button({
                        color: watch('neutralization') === true ? 'selected' : 'sub',
                      }),
                    )}
                    onClick={() => {
                      handleButtonClickToForm('neutralization', true);
                    }}
                  >
                    <p className={'font-normal'}>중성화 했어요</p>
                  </button>
                  <button
                    type="button"
                    className={cn(
                      button({
                        color: watch('neutralization') === false ? 'selected' : 'sub',
                      }),
                    )}
                    onClick={() => {
                      handleButtonClickToForm('neutralization', false);
                    }}
                  >
                    <p className={'font-normal'}>중성화 안했어요</p>
                  </button>
                </div>
                {fieldState.error && (
                  <p className={cn(danger, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          ></Controller>

          <Controller
            name="allergy"
            control={control}
            rules={{
              validate: (value) => {
                if (value === undefined) {
                  return '알러지 여부는 필수값입니다.';
                }
              },
            }}
            render={({ fieldState }) => (
              <GenerateItem question={'가지고 있는 알러지가 있나요?'}>
                <div className={cn(flexRow, 'gap-3')}>
                  <button
                    type="button"
                    className={cn(
                      button({
                        color: watch('allergy') === true ? 'selected' : 'sub',
                      }),
                    )}
                    onClick={() => {
                      allergySheetOpen();
                      handleButtonClickToForm('allergy', true);
                    }}
                  >
                    <p className={'font-normal'}>알러지가 있어요</p>
                  </button>
                  <button
                    type="button"
                    className={cn(
                      button({
                        color: watch('allergy') === false ? 'selected' : 'sub',
                      }),
                    )}
                    onClick={() => {
                      handleButtonClickToForm('allergy', false);
                      onClickNoAllergy();
                    }}
                  >
                    <p className={'font-normal'}>알러지가 없어요</p>
                  </button>
                </div>
                {fieldState.error && (
                  <p className={cn(danger, caption)}>{fieldState.error.message}</p>
                )}
              </GenerateItem>
            )}
          ></Controller>
        </div>
        <BottomSheet
          isOpen={isOpen}
          onClose={allergySheetClose}
          title={'알러지가 있어요'}
          isConfirm={onClickConfirmAllergeSheet}
        >
          <div className={cn(flexCol, `w-full, gap-8`)}>
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
          </div>
        </BottomSheet>
      </GenerateView>
    </div>
  );
};

const allergeWrap = `flex gap-3 flex-wrap`;
