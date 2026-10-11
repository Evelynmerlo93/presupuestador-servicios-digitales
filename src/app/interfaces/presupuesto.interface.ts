export interface Service {
  id: string;
  name: string;
  basePrice: number;
  selected: boolean;
  // Parámetros opcionales específicos para el servicio Web
  pages?: number;
  languages?: number;
}