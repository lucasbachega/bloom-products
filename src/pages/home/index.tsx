import { Box, CircularProgress, Pagination } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../../components/products/ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/reducers/productsSlice";
import Toolbar from "./components/Toolbar";

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const filteredProducts = useMemo(() => {
    return items.filter((product: any) =>
      product.title.toLowerCase().includes(query)
    );
  }, [items, query]);

  const paginated = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  if (status === "loading") {
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Toolbar />
      <ProductList products={items} />
      {totalPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}
