export interface BusinessCardFormData {
  type: string;
  petName: string;
  gender: string;
  petProfileImgPath: string;
  birth: string;
  species: string;
  neutralization: boolean;
  allergy: boolean;
  mainAllerge?: string[];
  subAllerge?: string[];
  etcAllerge?: string[];
  personalityToPerson: string;
  personalityAmongAnimals: string;
  petLike: string[];
  petHate: string[];
  businesscardImgPath: string[];
}

export interface PetCardFormData {
  type: AnimalTypeEnum;
  name: string;
  description: string;
}

export enum AnimalTypeEnum {
  dog = '강아지',
  cat = '고양이',
}
