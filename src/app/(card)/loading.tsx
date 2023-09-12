import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { titleSm } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

export default function Loading() {
  return (
    <div className={cn(flexColCenter, 'justify-center h-full')}>
      <div className="loading-wrapper">
        <div className="loading-indicator" />
      </div>
      <span className={titleSm}>귀여운 펫 카드를 만들고 있어요</span>
    </div>
  );
}
