import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import ToggleThemeButton from "../buttons/ToggleThemeButton";

const Appbar = () => {
  return (
    <AppBar
      variant="outlined"
      enableColorOnDark
      color="secondary"
      sx={{
        "& .MuiTypography-root": { color: "#FFF" },
        "& .MuiIconButton-root": { color: "#FFF" },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h5" fontWeight={700}>
            Bloom Store
          </Typography>
          <Box flex={1} />
          <ToggleThemeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
