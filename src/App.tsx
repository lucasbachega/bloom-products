import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Appbar from "./components/appbar/Appbar";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./router/AppRouter";
import { persistor, store } from "./store";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme} defaultMode="light">
          <CssBaseline />
          <BrowserRouter>
            <Appbar />
            <AppContainer>
              <AppRouter />
            </AppContainer>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
