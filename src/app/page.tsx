import Image from 'next/image';

import { Template } from '@/components';
import { flexCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

export default function Home() {
  return (
    <Template>
      <main className={cn(flexCenter, `py-24`)}>
        <Image className="relative" src="/logo.svg" alt="Logo" width={180} height={37} priority />
      </main>
    </Template>
  );
}
