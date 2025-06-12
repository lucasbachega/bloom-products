import { GridView, ViewStream } from "@mui/icons-material";
import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setLayoutMode } from "../../../store/reducers/productsSlice";

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const layoutMode = useAppSelector((state) => state.products.layoutMode);
  return (
    <Stack zIndex={10} height={50} bgcolor={grey[200]} gap={1}>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Box flex={1} />
        <ToggleButtonGroup
          exclusive
          sx={{ height: 30 }}
          color="secondary"
          value={layoutMode || "list"}
          onChange={(e, v) => Boolean(v) && dispatch(setLayoutMode(v))}
        >
          <ToggleButton value={"list"}>
            <ViewStream />
          </ToggleButton>
          <ToggleButton value={"grid"}>
            <GridView />
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </Stack>
  );
};

export default Toolbar;
