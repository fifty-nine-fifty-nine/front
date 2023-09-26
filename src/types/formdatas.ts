export interface BusinessCardFormData {
  type: string;
  petName: string;
  gender: string;
  businesscardImgPath: string[];
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
}

export interface BusinesscardWithId extends BusinessCardFormData {
  id: number;
}

export interface PetCardFormData {
  type: AnimalTypeEnum;
  name: string;
  description: string;
}

export interface PetCardResponse {
  type: AnimalTypeEnum;
  name: string;
  img_url: string;
}

export interface PetCardSharedParams {
  name: string;
  imgPath: string;
}

export interface BusinessCardSharedParams {
  petName: string;
  frontPage: string;
  backPage: string;
}

export enum AnimalTypeEnum {
  dog = '강아지',
  cat = '고양이',
}
