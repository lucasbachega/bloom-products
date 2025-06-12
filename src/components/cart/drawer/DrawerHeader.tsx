import { Close } from "@mui/icons-material";
import {
    Box,
    Button,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
    clearCart,
    selectCartItemsTotal,
} from "../../../store/reducers/cartSlice";

interface Props {
  onClose: () => void;
}

const DrawerHeader = ({ onClose }: Props) => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectCartItemsTotal);

  const handleClear = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <DialogTitle display={"flex"} alignItems={"center"} gap={1}>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
      <Box flex={1}>
        <Typography variant="h5" fontWeight={600}>
          Carrinho
        </Typography>
        {Boolean(total) && (
          <Typography variant="body1" color="textSecondary" fontWeight={500}>
            {total} produto{total > 1 ? "s" : ""}
          </Typography>
        )}
      </Box>
      {total > 0 && <Button onClick={handleClear}>Limpar</Button>}
    </DialogTitle>
  );
};

export default memo(DrawerHeader);
