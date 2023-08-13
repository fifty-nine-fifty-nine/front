import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed h-20 left-0 bottom-0 flex w-full justify-center border-b border-neutral-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit">
      <Link href="/" className="flex-1">
        <div className="flex justify-center items-center h-full hover:bg-neutral-300 dark:hover:bg-neutral-900 ease-in duration-150">
          <p>홈</p>
        </div>
      </Link>
      <Link href="/mypage" className="flex-1">
        <div className="flex justify-center items-center h-full hover:bg-neutral-300 dark:hover:bg-neutral-900 ease-in duration-150">
          <p>마이페이지</p>
        </div>
      </Link>
    </nav>
  );
};
