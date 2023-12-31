import { redirect } from 'next/navigation';

import { Template } from '@/components/templates';
import { fetcher } from '@/lib/fetcher';
import type { BusinesscardWithId } from '@/types';

import { CardDeleteButton } from './components/CardDeleteButton';
import { CardInfoEditForm } from './components/CardInfoEditForm';

const findBusinessCardById = async (id: number) => {
  const { data: businessCardsData } = await fetcher<Array<BusinesscardWithId>>(
    '/pets/businesscards/me',
  );
  const cardData = businessCardsData?.filter((card) => card.id == id)[0];
  return { cardData };
};

const BusinessCardEditPage = async ({ params: { id } }: { params: { id: string } }) => {
  const { cardData } = await findBusinessCardById(Number(id));

  if (!cardData) redirect('/mypage');
  return (
    <Template
      withAppBar={true}
      withNavbar={false}
      titleText="명함 정보 수정"
      action={<CardDeleteButton id={Number(id)} />}
    >
      <CardInfoEditForm card={cardData} />
    </Template>
  );
};

export default BusinessCardEditPage;
