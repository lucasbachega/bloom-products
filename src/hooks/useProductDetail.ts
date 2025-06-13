import { useEffect, useState } from "react";
import { detailProduct } from "../services/api";
import { IProduct } from "../types/products";

type ProductDetailData = IProduct & {
  hasDiscount: boolean;
  discountPercent: number;
  discountPrice: number;
};

export function useProductDetail(productId?: number | any) {
  const [data, setData] = useState<ProductDetailData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    detailProduct(productId)
      .then((product) => {
        setData(product);
      })
      .catch(() => {
        setError("Erro ao carregar produto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return { data, loading, error };
}
