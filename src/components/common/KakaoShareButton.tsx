import Image from 'next/image';

interface Props {
  templateId: number;
  requestUrl: string;
  thumbImgPath: string;
  petName?: string;
}

const KaKaoShareButton = ({ templateId, requestUrl, thumbImgPath, petName }: Props) => {
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
    <div>
      <Image
        src="/svg/kakao.svg"
        alt=""
        width={20}
        height={20}
        priority
        onClick={() => {
          onClick();
        }}
      />
    </div>
  );
};

export default KaKaoShareButton;
