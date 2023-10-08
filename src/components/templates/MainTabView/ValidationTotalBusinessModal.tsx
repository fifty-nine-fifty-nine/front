'use client';

import React from 'react';

import type { ModalProps } from '@/components/common/PopupModal';
import PopupModal from '@/components/common/PopupModal';
import * as S from '@/styles/ogoo';
import { cn } from '@/utils';

interface Props extends ModalProps {
  handleRoute: () => void;
}

export const ValidationTotalBusinessModal = ({ isOpen, closeModal, handleRoute }: Props) => {
  return (
    <PopupModal
      isOpen={isOpen}
      closeModal={closeModal}
      title="명함을 이미 2개 만들었어요!"
      content={`새로운 명함을 만드시려면\n기존 명함을 삭제해 주세요.`}
      actions={[
        <button
          key="delete"
          type="button"
          className={cn(S.modalButton, S.filled)}
          onClick={handleRoute}
        >
          명함 확인하러 가기
        </button>,
        <button
          key="cancel"
          type="button"
          className={cn(S.modalButton, S.textOnly)}
          onClick={closeModal}
        >
          취소
        </button>,
      ]}
    />
  );
};
