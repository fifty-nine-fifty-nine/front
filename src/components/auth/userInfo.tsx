'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

export const UserInfo = () => {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        {/* <h1>Client Session</h1> */}
        {/* <strong>{session?.user?.name ?? '이름'}</strong> */}
        <Image
          src={session?.user.image}
          alt="프로필 사진"
          width={100}
          height={100}
          priority
          className={`rounded-full`}
        />
        {/* <small className={` break-all`}>{JSON.stringify(session)}</small> */}
      </>
    );
};
