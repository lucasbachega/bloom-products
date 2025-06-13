import { Box, CardActionArea, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../types/products";
import { formatAmount } from "../../../utils/formatters";
import AddToCartButton from "../../AddToCartButton";
import DiscountBadge from "../DiscountBadge";

interface ItemProps {
  product: IProduct;
}

const ProductOfferItem = ({ product }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <Box minWidth={260} flex={1}>
      <CardActionArea
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{ borderRadius: 2 }}
      >
        <Stack p={2} direction={"row"} gap={2} alignItems={"flex-start"}>
          <Stack
            height={100}
            border={2}
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
                variant="body2"
                sx={{ textDecoration: "line-through" }}
                color="textSecondary"
                textAlign={"right"}
              >
                DE: R$ {formatAmount(product.price)}
              </Typography>
              <Typography fontWeight={600} textAlign={"right"}>
                POR: R$ {formatAmount(product.discountPrice)}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardActionArea>
      <Stack height={30} direction={"row"} gap={1} width={"100%"} px={2}>
        <AddToCartButton product={product} stackProps={{ flex: 1 }} />
      </Stack>
    </Box>
  );
};

export default memo(ProductOfferItem);
