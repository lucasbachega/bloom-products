import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { memo } from "react";
import ToggleThemeButton from "../ui/buttons/ToggleThemeButton";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";

const Appbar = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      variant="outlined"
      color="secondary"
      sx={{
        "& .MuiTypography-root": { color: "#FFF" },
        "& .MuiIconButton-root": { color: "#FFF" },
        boxShadow: scrolled ? 4 : 0,
        border: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <Typography variant="h5" fontWeight={700}>
            Bloom Store
          </Typography>

          <Box flex={1} />

          {!isMobile && <SearchBar />}

          <Box flex={1} />

          <ToggleThemeButton />
          <CartButton />
        </Toolbar>

        {isMobile && (
          <Stack
            direction={"row"}
            justifyContent={"center"}
            px={2}
            pb={2}
            mt={1}
          >
            <SearchBar />
          </Stack>
        )}
      </Container>
    </AppBar>
  );
};

export default memo(Appbar);
