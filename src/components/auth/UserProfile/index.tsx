import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';

import * as S from './style.css';

interface Props {
  outline?: boolean;
}

export const userProfile = async () => {
  const serverSession = await getServerSession(authOptions);

  const userName = serverSession?.user?.name;
  const UserImage = ({ outline = false }: Props) => (
    <div
      className={S.userProfileCircle}
      style={outline ? { border: '2px solid white' } : undefined}
    >
      <Image
        src={serverSession?.user.image ?? '/img/profile_fallback.jpeg'}
        alt="프로필 사진"
        width={100}
        height={100}
        priority
        className={S.userProfileImage}
      />
    </div>
  );

  return { userName, UserImage };
};
