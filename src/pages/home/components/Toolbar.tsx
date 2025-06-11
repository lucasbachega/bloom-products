import { GridView } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { toggleLayoutMode } from "../../../store/reducers/productsSlice";

const Toolbar = () => {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Produtos
        </Typography>
        <Box flex={1} />
        <IconButton onClick={() => dispatch(toggleLayoutMode())}>
          <GridView />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Toolbar;
