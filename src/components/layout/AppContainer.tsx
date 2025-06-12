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
      <Box
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"background.default"}
        component={"main"}
      >
        <Container
          sx={{ flex: 1, pt: "80px", display: "flex", flexDirection: "column" }}
        >
          {children}
        </Container>
      </Box>
    </div>
  );
};

export default AppContainer;
