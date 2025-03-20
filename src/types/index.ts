export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};