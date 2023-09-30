import Image from 'next/image';
import React from 'react';

import { flexRowCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

import type { KaKaoShareProps } from './KakaoShareButton';
import KaKaoShareButton from './KakaoShareButton';

export const ShareButtonList = (props: KaKaoShareProps) => {
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
        // onClick={() => {}}
      />
    </div>
  );
};
