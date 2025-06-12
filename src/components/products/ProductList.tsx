import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectProducts } from "../../store/reducers/productsSlice";
import { IProduct } from "../../types/products";
import BottomPagination from "./BottomPagination";
import ProductListItem from "./list-item/ProductListItem";

const ProductList = () => {
  const theme = useTheme();
  const layoutMode = useAppSelector((state) => state.products.layoutMode);
  const products = useAppSelector(selectProducts("regular"));

  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isGridLike = layoutMode === "grid" || isMobile;

  const query = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    setPage(1);
  }, [Boolean(query)]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }, [products, query]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, page]);

  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / itemsPerPage),
    [filteredProducts]
  );

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const renderItems = useCallback(
    (product: IProduct) => {
      return (
        <Grid
          key={product.id}
          size={{ xs: 12, md: layoutMode === "list" ? 12 : 4 }}
        >
          <ProductListItem product={product} isGridLike={isGridLike} />
        </Grid>
      );
    },
    [layoutMode, isGridLike]
  );

  return (
    <>
      <Grid container spacing={2}>
        {paginatedProducts.map(renderItems)}
      </Grid>
      <Box flex={1} />
      {totalPages > 1 && (
        <BottomPagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default memo(ProductList);
