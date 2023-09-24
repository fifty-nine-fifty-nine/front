import { userProfile } from '@/components';
import * as A from '@/styles/ogoo/alignment.css';
import * as C from '@/styles/ogoo/colors.css';
import * as T from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export const MyPageHeader = async () => {
  const { userName, UserImage } = await userProfile();

  return (
    <header className={cn(C.bgPrimary, C.whiteText, 'p-5')}>
      <h2 className={T.titleLg}>마이페이지</h2>

      <div className={cn(A.flexColCenter, 'gap-3')}>
        <UserImage outline />
        <div className={cn(A.flexRowItemsEnd)}>
          <p className={cn(T.titleMd, 'mr-2')}>{userName}</p>
          <p className={T.subtitle}>집사님</p>
        </div>
      </div>
    </header>
  );
};
