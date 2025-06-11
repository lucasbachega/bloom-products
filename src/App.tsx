import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./components/routes/AppRouter";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <BrowserRouter>
        <AppContainer>
          <AppRouter />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
