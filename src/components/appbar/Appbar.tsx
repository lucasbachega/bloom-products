import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { memo } from "react";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";

const Appbar = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    target: undefined,
    threshold: 0,
  });
  return (
    <AppBar
      variant="outlined"
      enableColorOnDark
      color="secondary"
      sx={{
        "& .MuiTypography-root": { color: "#FFF" },
        "& .MuiIconButton-root": { color: "#FFF" },
        boxShadow: scrolled ? 4 : 0,
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            gap: 1,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Bloom Store
          </Typography>
          <Box flex={1} />
          <SearchBar />
          <Box flex={1} />
          <ToggleThemeButton />
          <CartButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(Appbar);
