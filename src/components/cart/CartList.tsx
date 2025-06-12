import { List } from "@mui/material";
import { useCallback } from "react";
import { ICartItem } from "../../types/cart";
import CartListItem from "./CartListItem";

interface Props {
  items: Array<ICartItem>;
}

const CartList = ({ items = [] }: Props) => {
  const renderItems = useCallback((item: ICartItem) => {
    return <CartListItem key={item.id} item={item} />;
  }, []);

  return (
    <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map(renderItems)}
    </List>
  );
};

export default CartList;
