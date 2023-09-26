import Link from 'next/link';

import { flexCenter } from '@/styles/ogoo/alignment.css';
import { inputColor } from '@/styles/ogoo/colors.css';
import { cn } from '@/utils';

export const FallbackCardSlot = () => {
  return (
    <Link href={'/businesscard'} className="w-[183px] h-[210px]">
      <article
        className={cn(
          flexCenter,
          ' w-full h-full rounded-xl border-dashed border-2 border-gray-200 hover:bg-gray-50 transition-all duration-150 ease-in-out',
        )}
      >
        <span className={cn(inputColor, 'text-[60px] font-extralight')}>+</span>
      </article>
    </Link>
  );
};
