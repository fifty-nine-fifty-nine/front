export interface FormData {
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
}
