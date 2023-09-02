import { GenerateItem, GenerateView } from '@/components';
import { input } from '@/styles/ogoo';
import { cn } from '@/utils';

export default async function BusinesscardFour() {
  return (
    <GenerateView
      questionNumber={'4'}
      title={'말랑이는 어떤 성격을\n가지고 있나요?'}
      nextLink={'/businesscard/5'}
    >
      <GenerateItem question={'말랑이는 사람한테'}>
        <input className={cn(input())} placeholder="ex) 처음 만나도 친근해요"></input>
      </GenerateItem>

      <GenerateItem question={'말랑이는 동물친구들 사이에서'}>
        <input className={cn(input())} placeholder="ex) 낮가림이 심해요"></input>
      </GenerateItem>
    </GenerateView>
  );
}
