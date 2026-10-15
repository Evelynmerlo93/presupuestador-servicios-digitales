export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  selected: boolean;
  //opcionales:
  pages?: number;
  languages?: number;
}