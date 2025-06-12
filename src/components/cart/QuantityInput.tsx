import { Add, Remove } from "@mui/icons-material";
import { IconButton, Stack, StackProps, Typography } from "@mui/material";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  decrementQuantity,
  incrementQuantity,
  selectQuantityByProductId,
} from "../../store/reducers/cartSlice";

interface Props {
  productId: number;
}

const QuantityInput = ({ productId, ...rest }: Props & StackProps) => {
  const dispatch = useAppDispatch();

  const value = useAppSelector((state) =>
    selectQuantityByProductId(state, productId)
  );

  const increment = () => {
    dispatch(incrementQuantity(productId));
  };
  const decrement = () => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <Stack direction={"row"} alignItems={"center"} gap={2} {...rest}>
      <IconButton onClick={increment}>
        <Add />
      </IconButton>
      <Typography fontWeight={700} color="secondary">
        {value?.toString()}
      </Typography>
      <IconButton onClick={decrement}>
        <Remove />
      </IconButton>
    </Stack>
  );
};

export default memo(QuantityInput);
