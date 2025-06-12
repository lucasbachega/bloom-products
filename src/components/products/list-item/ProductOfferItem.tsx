import {
  DeleteOutlineOutlined,
  SentimentSatisfiedAltOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardActionArea,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useIsInCart } from "../../../hooks/useIsInCart";
import { addToCart, removeFromCart } from "../../../store/reducers/cartSlice";
import { IProduct } from "../../../types/products";
import { formatAmount } from "../../../utils/formatters";
import DiscountBadge from "../DiscountBadge";

interface ItemProps {
  product: IProduct;
}
interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const isInCart = useIsInCart(product.id);

  const handleAddToCart = () => {
    if (isInCart) return;
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <>
      <Button
        onClick={handleAddToCart}
        startIcon={
          isInCart ? (
            <SentimentSatisfiedAltOutlined />
          ) : (
            <ShoppingCartOutlined />
          )
        }
        disabled={isInCart}
        size="small"
        fullWidth
        variant="contained"
      >
        {isInCart ? "No carrinho" : "Comprar"}
      </Button>
      {isInCart && (
        <IconButton size="small" onClick={handleRemoveFromCart}>
          <DeleteOutlineOutlined fontSize="small" />
        </IconButton>
      )}
    </>
  );
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
        <AddToCartButton product={product} />
      </Stack>
    </Box>
  );
};

export default memo(ProductOfferItem);
