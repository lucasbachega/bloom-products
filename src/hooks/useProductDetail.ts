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
    let isMounted = true;

    if (!productId) {
      setData(null);
      setLoading(false);
      setError("ID do produto inválido.");
      return;
    }

    setLoading(true);
    setError(null);

    detailProduct(productId)
      .then((product) => {
        if (isMounted) setData(product);
      })
      .catch(() => {
        if (isMounted) setError("Erro ao carregar produto.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return { data, loading, error };
}
