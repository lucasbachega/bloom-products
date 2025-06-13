import { Box, Container, Paper, Typography } from "@mui/material";
import { useCallback } from "react";
import ProductOfferItem from "../../../../components/products/list-item/ProductOfferItem";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { selectProducts } from "../../../../store/reducers/productsSlice";
import { IProduct } from "../../../../types/products";

const OfferShowcase = () => {
  const discountedProducts = useAppSelector((state) =>
    selectProducts(state, "discounted")
  );

  const renderProducts = useCallback((product: IProduct) => {
    return <ProductOfferItem key={product.id} product={product} />;
  }, []);

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        mt: -1,
        py: "30px",
        overflow: "hidden",
        borderRadius: 0,
        boxShadow: 4,
      }}
    >
      <Container>
        <Typography fontWeight={600} mb={1} fontSize={"1.1rem"}>
          Men's Clothing
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {discountedProducts.map(renderProducts)}
        </Box>
      </Container>
    </Paper>
  );
};

export default OfferShowcase;
