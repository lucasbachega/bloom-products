import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { memo, useCallback } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { IProduct } from "../../types/products";
import ProductListItem from "./list-item/ProductListItem";

interface Props {
  products: Array<IProduct>;
}

const ProductList = ({ products }: Props) => {
  const theme = useTheme();
  const layoutMode = useAppSelector((state) => state.products.layoutMode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isGridLike = layoutMode === "grid" || isMobile;

  const renderItems = useCallback(
    (product: IProduct, idx: number) => {
      return (
        <Grid
          size={{ xs: 12, md: layoutMode === "list" ? 12 : 4 }}
          key={product.id}
        >
          <ProductListItem product={product} isGridLike={isGridLike} />
        </Grid>
      );
    },
    [layoutMode, isGridLike]
  );

  return (
    <Grid container spacing={2}>
      {products.map(renderItems)}
    </Grid>
  );
};

export default memo(ProductList);
