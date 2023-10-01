'use client';

import Image from 'next/image';
import React from 'react';

import { flexRowCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

import type { KaKaoShareProps } from './KakaoShareButton';
import KaKaoShareButton from './KakaoShareButton';

interface Props extends KaKaoShareProps {
  imageUrl: string[];
  domain: string;
}

export const ShareButtonList = (props: Props) => {
  const handleCopyShareLink = async () => {
    const shareUrl = `${props.domain}/kakaoshare?petName=${props.petName}&frontPage=${props.imageUrl[0]}&backPage=${props.imageUrl[1]}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <div className={cn(flexRowCenter, 'gap-4')}>
      <KaKaoShareButton
        templateId={props.templateId}
        requestUrl={props.requestUrl}
        thumbImgPath={props.thumbImgPath}
        petName={props.petName}
      />
      <Image
        src="/svg/linkicon.svg"
        alt="링크 공유하기"
        width={24}
        height={24}
        className="cursor-pointer"
        style={{ width: 'auto', height: 'auto' }}
        priority
        onClick={() => {
          handleCopyShareLink();
        }}
      />
    </div>
  );
};
