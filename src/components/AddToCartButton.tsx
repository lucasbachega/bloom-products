import {
    DeleteOutlineOutlined,
    SentimentSatisfiedAltOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import {
    Button,
    ButtonProps,
    IconButton,
    IconButtonProps,
    Stack,
    StackProps,
} from "@mui/material";
import { memo } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useIsInCart } from "../hooks/useIsInCart";
import { addToCart, removeFromCart } from "../store/reducers/cartSlice";
import { IProduct } from "../types/products";

const AddToCartButton = ({
  product,
  buttonProps,
  stackProps,
  iconButtonProps,
}: {
  product: IProduct;
  buttonProps?: ButtonProps;
  iconButtonProps?: IconButtonProps;
  stackProps?: StackProps;
}) => {
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
    <Stack direction={"row"} alignItems={"center"} gap={1} {...stackProps}>
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
        {...buttonProps}
      >
        {isInCart ? "No carrinho" : "Comprar"}
      </Button>
      {isInCart && (
        <IconButton
          size="small"
          onClick={handleRemoveFromCart}
          {...iconButtonProps}
        >
          <DeleteOutlineOutlined fontSize="small" />
        </IconButton>
      )}
    </Stack>
  );
};

export default memo(AddToCartButton);
