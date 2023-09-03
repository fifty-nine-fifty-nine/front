import BusinessCardAllergyView from '@/components/businesscard/BusinessCardAllergyView';
import BusinessCardFreindshipView from '@/components/businesscard/BusinessCardFreindshipView';
import BusinessCardPetNameView from '@/components/businesscard/BusinessCardPetNameView';
import BusinessCardPetPhotoView from '@/components/businesscard/BusinessCardPetPhotoView';
import BusinessCardPreferenceView from '@/components/businesscard/BusinessCardPreferenceView';

export default function GenerateProgress({ params }: { params: { generateCount: string } }) {
  const currentPage = params.generateCount;

  if (currentPage === '1') {
    return <BusinessCardPetNameView />;
  }

  if (currentPage === '2') {
    return <BusinessCardPetPhotoView />;
  }

  if (currentPage === '3') {
    return <BusinessCardAllergyView />;
  }

  if (currentPage === '4') {
    return <BusinessCardFreindshipView />;
  }
  if (currentPage === '5') {
    return <BusinessCardPreferenceView />;
  }
}
