import { InfoOutlineRounded } from "@mui/icons-material";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/reducers/productsSlice";
import MainList from "./components/MainList";
import Toolbar from "./components/Toolbar";
import OfferShowcase from "./components/offer-showcase/OfferShowcase";

function Wrapper({ children }: any) {
  const status = useAppSelector((state) => state.products.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  if (status !== "succeeded") {
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
          <InfoOutlineRounded color="error" sx={{ fontSize: "5rem" }} />
          <Typography textAlign={"center"} fontWeight={600} mt={2}>
            Erro ao carregar os produtos
          </Typography>
        </Box>
      );
    }

    return null;
  }

  return children;
}

export default function Home() {
  return (
    <Wrapper>
      <Box flex={1} display="flex" flexDirection="column" pb="100px">
        <Toolbar />
        <OfferShowcase />
        <Container
          sx={{ flex: 1, pt: "40px", display: "flex", flexDirection: "column" }}
        >
          <MainList />
        </Container>
      </Box>
    </Wrapper>
  );
}
