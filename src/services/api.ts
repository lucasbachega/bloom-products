import axios from "axios";
import { IProduct } from "../types/products";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const listProducts = async (): Promise<
  (IProduct & {
    hasDiscount: boolean;
    discountPercent: number;
    discountPrice: number;
  })[]
> => {
  const response = await api.get<IProduct[]>("/products");

  return response.data.map((item) => {
    const isMensCategory = item.category === "men's clothing";
    const discountPercent = isMensCategory ? 10 : 0;
    const discountPrice = +(item.price * (1 - discountPercent / 100)).toFixed(
      2
    );

    return {
      ...item,
      hasDiscount: isMensCategory,
      discountPercent,
      discountPrice,
    };
  });
};

export const detailProduct = async (
  id: string | number
): Promise<
  IProduct & {
    hasDiscount: boolean;
    discountPercent: number;
    discountPrice: number;
  }
> => {
  const response = await api.get<IProduct>(`/products/${id}`);
  const item = response.data;

  const isMensCategory = item.category === "men's clothing";
  const discountPercent = isMensCategory ? 10 : 0;
  const discountPrice = +(item.price * (1 - discountPercent / 100)).toFixed(2);

  return {
    ...item,
    hasDiscount: isMensCategory,
    discountPercent,
    discountPrice,
  };
};
