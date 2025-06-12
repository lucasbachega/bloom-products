import { List } from "@mui/material";
import { useCallback } from "react";
import { ICartItem } from "../../types/cart";
import CartProductItem from "./CartProductItem";

interface Props {
  items: Array<ICartItem>;
}

const CartList = ({ items = [] }: Props) => {
  const renderItems = useCallback((item: ICartItem) => {
    return <CartProductItem item={item} />;
  }, []);

  return (
    <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map(renderItems)}
    </List>
  );
};

export default CartList;
