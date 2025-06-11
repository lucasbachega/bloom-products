import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Appbar from "./components/appbar/Appbar";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./router/AppRouter";
import { store } from "./store";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        <BrowserRouter>
          <Appbar />
          <AppContainer>
            <AppRouter />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
