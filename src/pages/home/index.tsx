import { InfoOutlineRounded } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import OfferShowcase from "../../components/offer-showcase/OfferShowcase";
import ProductList from "../../components/products/ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/reducers/productsSlice";
import Toolbar from "./components/Toolbar";

export default function Home() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  if (status === "loading") {
    return (
      <Box mt={"200px"} textAlign="center">
        <CircularProgress thickness={5} />
      </Box>
    );
  }

  if (status === "failed") {
    return (
      <Box mt={"200px"} textAlign="center">
        <InfoOutlineRounded color="error" />
        <Typography textAlign={"center"} fontWeight={600} mt={2}>
          Erro ao carregar os produtos
        </Typography>
      </Box>
    );
  }

  return (
    <Box flex={1} display="flex" flexDirection="column" pb="100px">
      <Toolbar />
      <OfferShowcase />
      <ProductList />
    </Box>
  );
}
