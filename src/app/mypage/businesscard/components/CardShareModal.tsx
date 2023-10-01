import type { ModalProps } from '@/components/common/PopupModal';
import PopupModal from '@/components/common/PopupModal';
import { ShareButtonList } from '@/components/common/ShareButtonList';
import { domainExtractor } from '@/utils';

interface Props extends ModalProps {
  petName: string;
  imageUrl: string[];
  selectedShareThumb: string;
}

export const CardShareModal = ({
  isOpen,
  closeModal,
  petName,
  imageUrl,
  selectedShareThumb,
}: Props) => {
  const currentUrl = window.location.href;
  const domain = domainExtractor(currentUrl, '/share');

  return (
    <PopupModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`${petName} 명함을 공유할까요?`}
      content={`명함 공유시, 집사님 외 다른 사람들은\n저장이 불가능합니다.`}
      actions={[
        <ShareButtonList
          key="share"
          templateId={98893}
          requestUrl={`petName=${petName}&frontPage=${imageUrl[0]}&backPage=${imageUrl[1]}`}
          thumbImgPath={selectedShareThumb}
          petName={petName}
          imageUrl={imageUrl}
          domain={domain}
        />,
      ]}
    />
  );
};
