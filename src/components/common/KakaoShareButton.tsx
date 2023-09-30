import Image from 'next/image';

export interface KaKaoShareProps {
  templateId: number;
  requestUrl: string;
  thumbImgPath: string;
  petName?: string;
}

const KaKaoShareButton = ({ templateId, requestUrl, thumbImgPath, petName }: KaKaoShareProps) => {
  const onClick = () => {
    const { Kakao } = window;

    Kakao.Share.sendCustom({
      templateId: templateId,
      templateArgs: {
        IMAGE: thumbImgPath,
        URL: requestUrl,
        NAME: petName,
      },
    });
  };

  return (
    <Image
      src="/svg/kakao.svg"
      alt="카카오톡 공유하기"
      width={24}
      height={24}
      className="cursor-pointer"
      style={{ width: 'auto', height: 'auto' }}
      priority
      onClick={() => {
        onClick();
      }}
    />
  );
};

export default KaKaoShareButton;
