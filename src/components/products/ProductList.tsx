import { Grid } from "@mui/material";
import { useCallback } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { IProduct } from "../../types/products";
import ProductListItem from "./item/ProductListItem";

interface Props {
  products: Array<IProduct>;
}

const ProductList = ({ products }: Props) => {
  const layoutMode = useAppSelector((state) => state.products.layoutMode);

  const renderItems = useCallback(
    (product: IProduct, idx: number) => {
      return (
        <Grid
          size={{ xs: 12, md: layoutMode === "list" ? 12 : 4 }}
          key={product.id}
        >
          <ProductListItem product={product} />
        </Grid>
      );
    },
    [layoutMode]
  );

  return (
    <Grid container spacing={2}>
      {products.map(renderItems)}
    </Grid>
  );
};

export default ProductList;
