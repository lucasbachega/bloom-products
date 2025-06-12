import { Drawer } from "@mui/material";
import { memo } from "react";
import DrawerContent from "./DrawerContent";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose = () => {} }: Props) => {
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
