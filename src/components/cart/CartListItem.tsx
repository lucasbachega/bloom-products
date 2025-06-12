import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeFromCart } from "../../store/reducers/cartSlice";
import { ICartItem } from "../../types/cart";
import DiscountBadge from "../products/DiscountBadge";
import QuantityInput from "./QuantityInput";

interface Props {
  item: ICartItem;
}

const CartListItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const totalAmount = useMemo(
    () => item.quantity * item.price,
    [item.quantity, item.price]
  );

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Paper
      elevation={2}
      sx={{ borderRadius: 0.3, pb: 0.5, position: "relative" }}
    >
      <Stack p={2} direction={"row"} alignItems={"flex-start"} gap={2}>
        <Box
          width={90}
          borderRadius={1}
          border={1}
          borderColor={"secondary.main"}
          p={1}
          position={"relative"}
        >
          <img width={"100%"} src={item.image} />
          {item.hasDiscount && (
            <DiscountBadge
              discountPercent={item.discountPercent}
              left={undefined}
              right={-10}
              small
            />
          )}
        </Box>
        <Box flex={1}>
          <Typography
            component={Link}
            to={`/product/${item.id}`}
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              lineHeight: 1,
              ":hover": {
                textDecoration: "underline",
              },
            }}
            fontWeight={600}
            fontSize={"1.05rem"}
          >
            {item.title}
          </Typography>
          <Stack mt={1} gap={1} direction={"column"} alignItems={"flex-end"}>
            {item.hasDiscount ? (
              <>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  textAlign={"right"}
                  sx={{
                    textDecoration: "line-through",
                  }}
                >
                  DE: R$ {item.price}
                </Typography>
                <Typography mt={-1} fontWeight={600} textAlign={"right"}>
                  POR: R$ {item.price}
                </Typography>
              </>
            ) : (
              <Typography fontWeight={600} textAlign={"right"}>
                R$ {item.price}
              </Typography>
            )}
            <Stack direction={"row"} alignItems={"center"}>
              <QuantityInput
                productId={item.id}
                border={1}
                borderColor={"divider"}
                height={30}
                borderRadius={100}
                gap={1}
              />
            </Stack>
            <Typography fontWeight={700}>Total: {totalAmount}</Typography>
          </Stack>
        </Box>
      </Stack>
      <IconButton
        size="small"
        sx={{ position: "absolute", bottom: 1, left: 1 }}
        onClick={handleRemoveItem}
      >
        <DeleteOutlineOutlined fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default memo(CartListItem);
