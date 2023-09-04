import { PetCardTypeView } from '@/components/petcard';

export default function PetCardGeneratingPage({ params }: { params: { generateCount: string } }) {
  const currentPage = params.generateCount;

  if (currentPage === '1') {
    return <PetCardTypeView />;
  }
}
