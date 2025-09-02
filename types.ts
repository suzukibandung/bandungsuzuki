
export interface Color {
  name: string;
  imageUrl: string;
}

export interface Variant {
  name: string;
  price: number;
  colors?: Color[];
}

export interface Car {
  id: number;
  name: string;
  imageUrl: string;
  variants: Variant[];
}