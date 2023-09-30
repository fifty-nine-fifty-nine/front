import React from 'react';

import type { ModalProps } from '@/components/common/PopupModal';
import PopupModal from '@/components/common/PopupModal';
import { ShareButtonList } from '@/components/common/ShareButtonList';

interface Props extends ModalProps {
  petName: string;
}

export const CardShareModal = ({ isOpen, closeModal, petName }: Props) => {
  return (
    <PopupModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`${petName} 명함을 공유할까요?`}
      content={`명함 공유시, 집사님 외 다른 사람들은\n저장이 불가능합니다.`}
      actions={
        [
          // TODO: 인자 넘긴 뒤 주석 해제
          // <ShareButtonList key="share" templateId={} requestUrl="" thumbImgPath={} petName={petName} />,
        ]
      }
    />
  );
};
