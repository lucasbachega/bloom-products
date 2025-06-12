import { Box, Button, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { IProduct } from "../../../types/products";
import DiscountBadge from "../DiscountBadge";

interface Props {
  product: IProduct;
}

const ProductOfferItem = ({ product }: Props) => {
  return (
    <Box minWidth={260} flex={1}>
      <Stack p={2} direction={"row"} gap={2} alignItems={"flex-start"}>
        <Stack
          height={110}
          border={1}
          borderColor={"primary.main"}
          width={80}
          p={1}
          borderRadius={1}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <img width={"100%"} src={product.image} />
        </Stack>
        <Stack flex={1}>
          <DiscountBadge
            discountPercent={product.discountPercent}
            position={"relative"}
            top={undefined}
            left={undefined}
            alignSelf={"flex-end"}
          />
          <Stack mt={2}>
            <Typography
              sx={{ textDecoration: "line-through" }}
              color="textSecondary"
              textAlign={"right"}
            >
              DE: R$ {product.price}
            </Typography>
            <Typography fontWeight={600} textAlign={"right"}>
              POR: R$ {product.discountPrice}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box width={"100%"} px={2}>
        <Button size="small" fullWidth variant="contained">
          Comprar
        </Button>
      </Box>
    </Box>
  );
};

export default memo(ProductOfferItem);
