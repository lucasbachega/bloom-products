import { ShoppingCartOutlined } from "@mui/icons-material";
import { DialogContent, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectCartItems } from "../../../store/reducers/cartSlice";
import CartList from "../CartList";

const DrawerContent = () => {
  const items = useAppSelector(selectCartItems);

  if (!items?.length)
    return (
      <Stack alignItems={"center"} justifyContent={"center"} flex={1} gap={3}>
        <ShoppingCartOutlined sx={{ fontSize: "5rem" }} color="disabled" />
        <Typography color="textSecondary" textAlign={"center"}>
          Seu carrinho está vazio
        </Typography>
      </Stack>
    );

  return (
    <DialogContent dividers sx={{ p: 2 }}>
      <CartList items={items} />
    </DialogContent>
  );
};

export default DrawerContent;
