import { Box, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../../components/products/ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/reducers/productsSlice";
import BottomPagination from "./components/BottomPagination";
import Toolbar from "./components/Toolbar";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const query = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const filteredProducts = useMemo(() => {
    return items.filter((product: any) =>
      product.title.toLowerCase().includes(query)
    );
  }, [items, query]);

  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, page]);

  const totalPages = useMemo<number>(
    () => Math.ceil(filteredProducts.length / itemsPerPage),
    [itemsPerPage, filteredProducts]
  );

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  if (status === "loading") {
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box flex={1} pb={"100px"}>
      <Toolbar />
      <ProductList products={paginated} />
      {totalPages > 1 && (
        <BottomPagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
}
