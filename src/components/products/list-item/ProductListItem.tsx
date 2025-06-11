import { AddShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActionArea,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { IProduct } from "../../../types/products";

const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isGridLike",
})<{ isGridLike: boolean }>(({ theme, isGridLike }) => ({
  display: "flex",
  flexDirection: isGridLike ? "column" : "row",
  overflow: "hidden",
  borderRadius: 0,
  position: "relative",
  boxShadow: theme.shadows[6],
  height: isGridLike ? 290 : 240,
}));

const ProductImageBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isGridLike",
})<{ isGridLike: boolean }>(({ isGridLike }) => ({
  width: isGridLike ? "100px" : "180px",
  height: isGridLike ? "100px" : "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  padding: isGridLike ? 0 : 16,
}));

const ProductImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "isGridLike",
})<{ isGridLike: boolean }>(({ isGridLike }) => ({
  maxHeight: isGridLike ? "100%" : "80%",
  maxWidth: "100%",
  objectFit: "contain",
  transition: ".1s ease",
}));

const ProductTitle = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const ProductDescription = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const AddCartButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isGridLike",
})<{ isGridLike: boolean }>(({ isGridLike }) => ({
  width: isGridLike ? "100%" : 60,
  height: isGridLike ? 40 : "100%",
  borderRadius: 0,
  borderTopLeftRadius: isGridLike ? 0 : undefined,
  borderBottomLeftRadius: isGridLike ? 0 : undefined,
}));

interface Props {
  product: IProduct;
  isGridLike?: boolean;
}

const ProductListItem = ({ product, isGridLike = false }: Props) => {
  return (
    <Root isGridLike={isGridLike}>
      <CardActionArea sx={{ flex: 1, height: "100%", p: isGridLike ? 2 : 3 }}>
        <Stack
          direction="row"
          gap={2}
          height="100%"
          alignItems={isGridLike ? "flex-start" : "center"}
        >
          <ProductImageBox isGridLike={isGridLike}>
            <ProductImage
              src={product.image}
              alt={product.title}
              isGridLike={isGridLike}
            />
          </ProductImageBox>

          <Box flex={1} display="flex" flexDirection="column" height="100%">
            <Box>
              <ProductTitle variant="h5" fontSize="1.2em" fontWeight={600}>
                {product.title}
              </ProductTitle>
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight={500}
              >
                {product.category}
              </Typography>
            </Box>

            <Box mt={isGridLike ? 1.5 : 0}>
              <Typography variant="h4" fontWeight={600} mt={1} gutterBottom>
                R$ {product.price}
              </Typography>
              <ProductDescription
                variant="body2"
                color="textSecondary"
                fontWeight={500}
              >
                {product.description}
              </ProductDescription>
            </Box>
          </Box>
        </Stack>
      </CardActionArea>

      <AddCartButton isGridLike={isGridLike} variant="contained">
        <AddShoppingCart />
      </AddCartButton>
    </Root>
  );
};

export default memo(ProductListItem);
