import { Box, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectCartTotalPrice } from "../../../store/reducers/cartSlice";
import { formatAmount } from "../../../utils/formatters";

const DrawerFooter = () => {
  const totalPrice = useAppSelector(selectCartTotalPrice);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ p: 2, bgcolor: "backgroundGray.main" }}
    >
      <Box flex={1} />
      <Typography variant="h6" fontWeight={600}>
        Total: R$ {formatAmount(totalPrice)}
      </Typography>
    </Stack>
  );
};

export default DrawerFooter;
