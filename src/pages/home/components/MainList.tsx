import { ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BottomPagination from "../../../components/products/BottomPagination";
import ProductList from "../../../components/products/ProductList";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectProducts } from "../../../store/reducers/productsSlice";

const MainList = () => {
  const products = useAppSelector((state) => selectProducts(state, "regular"));

  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = useAppSelector((state) => state.products.itemsPerPage);

  const query = searchParams.get("search")?.toLowerCase() || "";
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    setPage(1);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, [Boolean(query), itemsPerPage]);

  useEffect(() => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }, [page]);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
      );
    });
  }, [products, query]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, page, itemsPerPage]);

  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / itemsPerPage),
    [filteredProducts, itemsPerPage]
  );

  const noData = useMemo(
    () => !paginatedProducts.length,
    [paginatedProducts.length]
  );

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <>
      {Boolean(query?.trim()) && (
        <Typography mb={3} color="textSecondary">
          Resultados para: <strong>{query}</strong>
        </Typography>
      )}
      {noData && (
        <Box mt={"50px"} textAlign="center">
          <ShoppingBagOutlined color="disabled" sx={{ fontSize: "6rem" }} />
          <Typography textAlign={"center"} fontWeight={600} mt={2}>
            Ops. Nada encontrado
          </Typography>
        </Box>
      )}
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
