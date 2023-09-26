import { Template } from '@/components/templates';

import { MyPageFeedback } from './components/MyPageFeedback';
import { MyPageFooter } from './components/MyPageFooter';
import { MyPageHeader } from './components/MyPageHeader';
import { MyPetBusinessCards } from './components/MyPetBusinessCards';

export default async function MyPage() {
  return (
    <Template>
      <MyPageHeader />

      <MyPetBusinessCards />

      <MyPageFeedback />
      <MyPageFooter />
    </Template>
  );
}
