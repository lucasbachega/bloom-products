import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { memo, useCallback, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectCartItemsTotal } from "../../store/reducers/cartSlice";
import CartDrawer from "../cart/drawer/CartDrawer";

function ProductCountWrapper({ children }: any) {
  const total = useAppSelector(selectCartItemsTotal);
  return (
    <Badge color="error" badgeContent={total}>
      {children}
    </Badge>
  );
}

const CartButton = () => {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setOpenedDrawer((prev) => !prev)}>
        <ProductCountWrapper>
          <ShoppingCart />
        </ProductCountWrapper>
      </IconButton>
      <CartDrawer
        open={openedDrawer}
        onClose={useCallback(() => setOpenedDrawer(false), [])}
      />
    </>
  );
};

export default memo(CartButton);
