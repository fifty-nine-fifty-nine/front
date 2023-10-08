import { LoadingIndicator } from '@/components';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { titleSm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default function Loading() {
  return (
    <div className={cn(flexColCenter, 'justify-center h-full')}>
      <LoadingIndicator />
      <span className={titleSm}>귀여운 펫 명함을 만들고 있어요</span>
    </div>
  );
}
