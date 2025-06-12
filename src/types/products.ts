export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  hasDiscount?: boolean;
  discountPercent?: number;
  discountPrice?: number;
}
