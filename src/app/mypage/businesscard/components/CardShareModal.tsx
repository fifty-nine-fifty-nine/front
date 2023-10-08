import type { ModalProps } from '@/components/common/PopupModal';
import PopupModal from '@/components/common/PopupModal';
import { ShareButtonList } from '@/components/common/ShareButtonList';
import { KAKAO_SHARE_TEMPLATE_ID } from '@/constants';
import { useDomain } from '@/hooks/useDomain';

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
  const domain = useDomain();

  if (domain)
    return (
      <PopupModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={`${petName} 명함을 공유할까요?`}
        content={`명함 공유시, 집사님 외 다른 사람들은\n저장이 불가능합니다.`}
        actions={[
          <ShareButtonList
            key="share"
            templateId={KAKAO_SHARE_TEMPLATE_ID}
            requestUrl={`petName=${petName}&frontPage=${imageUrl[0]}&backPage=${imageUrl[1]}`}
            thumbImgPath={selectedShareThumb}
            petName={`${petName} 명함`}
            imageUrl={imageUrl}
            domain={domain}
          />,
        ]}
      />
    );
};
