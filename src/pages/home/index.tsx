import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import ErrorBox from "../../components/ui/ErrorBox";
import LoadingBox from "../../components/ui/LoadingBox";
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
      return <LoadingBox />;
    }

    if (status === "failed") {
      return <ErrorBox error="Erro ao carregar os produtos" />;
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
