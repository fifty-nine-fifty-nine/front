import { LoadingIndicator } from '@/components';
import { flexColCenter } from '@/styles/ogoo/alignment.css';
import { cn } from '@/utils';

export default function Loading() {
  return (
    <div className={cn(flexColCenter, 'justify-center h-full')}>
      <LoadingIndicator />
    </div>
  );
}
