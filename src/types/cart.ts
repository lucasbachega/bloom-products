export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  hasDiscount?: boolean;
  discountPercent?: number;
  discountPrice?: number;
}
