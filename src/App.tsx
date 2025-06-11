import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import ToggleThemeButton from "./components/buttons/ToggleThemeButton";
import AppContainer from "./components/layout/AppContainer";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <AppContainer>
        <ToggleThemeButton />
        Olá mundo
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
