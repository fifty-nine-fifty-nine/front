import { Template } from '@/components/templates';
import { button } from '@/styles/ogoo';
import { flexCol, flexColCenter, flexRow } from '@/styles/ogoo/alignment.css';
import { optionalText, subText } from '@/styles/ogoo/colors.css';
import { bodyLg, bodySm, titleLg } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

const ShareBusinessCardPage = () => {
  return (
    <Template>
      <div className={cn(flexCol, `h-[calc(100vh-260px)] py-24`)}>
        <div className={cn(flexColCenter)}>
          <h2 className={cn(titleLg, `whitespace-pre-wrap`)}>이름이 명함이 완성되었어요!</h2>
          <div></div>
        </div>
        <div className={`w-full px-5 mt-7 mb-10`}>
          <div className={cn(flexRow, 'gap-1 text-white mb-4')}>
            <button className={cn(button({ size: 'sm' }), 'w-full')} type="button">
              앞 · 뒷면 같이 저장
            </button>
            <button
              className={cn(button({ size: 'sm', color: 'secondary' }), 'w-full')}
              type="button"
            >
              앞면 저장
            </button>
            <button
              className={cn(button({ size: 'sm', color: 'secondary' }), 'w-full')}
              type="button"
            >
              뒷면 저장
            </button>
          </div>
          <strong className={cn(bodyLg, subText, `block pb-2`)}>유의사항</strong>
          <ul className={bulletItem}>
            <li>펫 명함은 최대 2개까지만 저장 가능합니다.</li>
            <li>
              이미 2개의 명함을 보유중이신 경우, 둘중 하나를 삭제해야 새 명함을 만들 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </Template>
  );
};

export default ShareBusinessCardPage;

const bulletItem = cn(bodySm, optionalText, `font-normal list-disc list-inside`);
