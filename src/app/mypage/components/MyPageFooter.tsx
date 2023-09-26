import { KakaoLogoutButton } from '@/components';
import * as A from '@/styles/ogoo/alignment.css';
import * as C from '@/styles/ogoo/colors.css';
import { bodyMd, bodySm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const MyPageFooter = () => {
  return (
    <section className={cn(A.flexCol, `items-start px-5 pt-6`)}>
      <KakaoLogoutButton />
      <p className={cn(C.subText, bodyMd)}>고객 서비스</p>
      <div className={cn(A.flexRow, C.inputColor, `gap-6 my-3`)}>
        <p className={cn(bodySm)}>개인정보 처리방침</p>
        <p className={cn(bodySm)}>이용약관</p>
        <p className={cn(bodySm)}>회원탈퇴</p>
      </div>
    </section>
  );
};
