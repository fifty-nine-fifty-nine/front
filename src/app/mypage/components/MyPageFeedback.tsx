import Image from 'next/image';
import Link from 'next/link';

import { flexRowCenter } from '@/styles/ogoo/alignment.css';
import * as C from '@/styles/ogoo/colors.css';
import { bodyLg, bodyMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const MyPageFeedback = () => {
  return (
    <section className={cn(C.bgPrimaryOptional, C.whiteText, 'h-22 p-5')}>
      <p className={cn(C.subText, bodyMd, 'mb-1')}>
        서비스를 사용해주신 가족님들의 의견을 들려주세요
      </p>

      <button className={cn(C.subText, bodyLg, flexRowCenter)}>
        <Link href="https://www.naver.com" target="_blank" referrerPolicy="no-referrer">
          <h4 className="mr-0.5 hover:underline">의견 남기러 가기</h4>
        </Link>
        <Image
          src="/svg/arrow_right.svg"
          alt=""
          width={16}
          height={16}
          priority
          className="py-0.5"
        />
      </button>
    </section>
  );
};
