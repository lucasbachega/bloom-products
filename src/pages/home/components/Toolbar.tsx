import { GridView, ViewStream } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  selectProductsTotal,
  setItemsPerPage,
  setLayoutMode
} from "../../../store/reducers/productsSlice";

function ToggleLayoutButton() {
  const dispatch = useAppDispatch();
  const layoutMode = useAppSelector((state) => state.products.layoutMode);
  return (
    <ToggleButtonGroup
      exclusive
      sx={{ height: 30 }}
      color="secondary"
      value={layoutMode || "list"}
      onChange={(e, v) => Boolean(v) && dispatch(setLayoutMode(v))}
    >
      <ToggleButton value={"list"}>
        <ViewStream fontSize="small" />
      </ToggleButton>
      <ToggleButton value={"grid"}>
        <GridView fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function SelectItemsPerPage() {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state) => state.products.itemsPerPage);
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Typography variant="body2">Exibir</Typography>
      <FormControl variant="outlined" sx={{ minWidth: 60 }}>
        <Select
          size="small"
          margin="none"
          value={itemsPerPage}
          onChange={(e: any) => {
            dispatch(setItemsPerPage(e.target.value));
          }}
          sx={{
            height: 30,
          }}
          slotProps={{
            input: {
              sx: {
                height: 30,
                textAlign: "center",
              },
            },
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="body2">por vez</Typography>
    </Stack>
  );
}

function ToolbarTitle() {
  const total = useAppSelector(selectProductsTotal);
  return (
    <Typography fontWeight={600} fontSize={"1rem"}>
      {total} Produto{total > 1 ? "s" : ""}
    </Typography>
  );
}

const Toolbar = () => {
  return (
    <Stack zIndex={10} height={45} bgcolor={grey[200]}>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: 2,
        }}
      >
        <ToolbarTitle />
        <Box flex={1} />
        <SelectItemsPerPage />
        <ToggleLayoutButton />
      </Container>
    </Stack>
  );
};

export default Toolbar;
