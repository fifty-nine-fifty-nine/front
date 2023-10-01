import React from 'react';

import type { ModalProps } from '@/components/common/PopupModal';
import PopupModal from '@/components/common/PopupModal';
import * as S from '@/styles/ogoo';
import { cn } from '@/utils';

interface Props extends ModalProps {
  onClickDelete: () => void;
}

export const CardDeleteModal = ({ isOpen, closeModal, onClickDelete }: Props) => {
  return (
    <PopupModal
      isOpen={isOpen}
      closeModal={closeModal}
      title="명함을 삭제할까요?"
      content={`명함 삭제시, 복원이 어렵습니다.\n신중하게 고민해주세요.`}
      actions={[
        <button
          key="delete"
          type="button"
          className={cn(S.modalButton, S.filled)}
          onClick={onClickDelete}
        >
          삭제하기
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
