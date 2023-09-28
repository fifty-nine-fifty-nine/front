import Image from 'next/image';

interface Props {
  templateId: number;
  requestUrl: string;
}

const KaKaoShareButton = ({ templateId, requestUrl }: Props) => {
  const onClick = () => {
    const { Kakao } = window;
    console.log(Kakao);

    Kakao.Share.sendCustom({
      templateId: templateId,
      requestUrl: requestUrl,
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
