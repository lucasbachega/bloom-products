import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { memo } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { useIsInCart } from "../../../hooks/useIsInCart";
import { addToCart, removeFromCart } from "../../../store/reducers/cartSlice";
import QuantityInput from "../../cart/QuantityInput";

interface Props {
  productId: number;
  title: string;
  price: number;
  isGridLike: boolean;
}

const CartActionButton = ({ productId, price, title, isGridLike }: Props) => {
  const dispatch = useAppDispatch();
  const isInCart = useIsInCart(productId);

  const handleOnClick = () => {
    if (!isInCart) {
      dispatch(addToCart({ id: productId, price, title, quantity: 1 }));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  return (
    <Stack direction={"row"} alignItems={"center"} gap={2}>
      {isInCart && (
        <Box flex={1}>
          <QuantityInput productId={productId} />
        </Box>
      )}
      <Button
        variant="contained"
        onClick={handleOnClick}
        color={isInCart ? "error" : "primary"}
        sx={{
          flex: !isInCart ? 1 : 0,
          width: isGridLike ? "100%" : 60,
          height: isGridLike ? 40 : "100%",
          borderRadius: 0,
          borderTopLeftRadius: isGridLike ? 0 : undefined,
          borderBottomLeftRadius: isGridLike ? 0 : undefined,
        }}
      >
        {isInCart ? <RemoveShoppingCart /> : <ShoppingCart />}
      </Button>
    </Stack>
  );
};

export default memo(CartActionButton);
