import { Box, Container, useColorScheme } from "@mui/material";
import { useEffect } from "react";

const AppContainer = ({ children }: any) => {
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#121212";
    }
  }, [mode]);

  return (
    <div className="App">
      <Box flex={1} bgcolor={"background.default"} component={"main"}>
        <Container sx={{ pt: "80px" }}>{children}</Container>
      </Box>
    </div>
  );
};

export default AppContainer;
