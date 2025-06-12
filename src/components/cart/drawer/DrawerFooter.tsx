import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectCartTotalPrice } from "../../../store/reducers/cartSlice";

const DrawerFooter = () => {
  const totalPrice = useAppSelector(selectCartTotalPrice);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ p: 2, bgcolor: grey[100] }}
    >
      <Box flex={1} />
      <Typography variant="h6" fontWeight={600}>
        Total: R$ {totalPrice}
      </Typography>
    </Stack>
  );
};

export default DrawerFooter;
