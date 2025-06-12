import { Drawer } from "@mui/material";
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DrawerContent from "./DrawerContent";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose = () => {} }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Drawer
      open={open}
      variant="temporary"
      anchor="right"
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "100%",
            maxWidth: 500,
          },
        },
        transition: {
          unmountOnExit: true,
        },
      }}
    >
      <DrawerHeader onClose={onClose} />
      <DrawerContent />
      <DrawerFooter />
    </Drawer>
  );
};

export default memo(CartDrawer);
