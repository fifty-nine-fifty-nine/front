import { getDownloadURL, ref } from 'firebase/storage';

import { Template } from '@/components/templates';
import { storage } from '@/firebase/fireStore';
import type { BusinessCardSharedParams } from '@/types';

import BusinessCardKakaoShare from './components/BusinessCardKakaoShare';

export default async function Kakaoshare({
  searchParams,
}: {
  searchParams: BusinessCardSharedParams;
}) {
  const businesscardInfo = searchParams;

  const frontPath = ref(storage, `kakaoshare/${businesscardInfo.frontPage}`);
  const backPath = ref(storage, `kakaoshare/${businesscardInfo.backPage}`);

  //FIXME: url 변경해서 데이터 받아오기
  const front = await getDownloadURL(frontPath);
  const back = await getDownloadURL(backPath);

  return (
    <Template>
      <BusinessCardKakaoShare
        businesscardInfo={{ petName: businesscardInfo.petName, frontPage: front, backPage: back }}
      />
    </Template>
  );
}
