import { Box } from "@mui/material";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BottomPagination from "../../../components/products/BottomPagination";
import ProductList from "../../../components/products/ProductList";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectProducts } from "../../../store/reducers/productsSlice";

const MainList = () => {
  const products = useAppSelector((state) => selectProducts(state, "regular"));

  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

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

  return (
    <>
      <ProductList products={paginatedProducts} />
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

export default memo(MainList);
