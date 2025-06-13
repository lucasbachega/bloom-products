import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
    disableCssColorScheme: true,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    allVariants: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: ".975rem",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          transition: "none",
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          main: "#5062F0",
        },
        primary: {
          main: "#0B1A8E",
        },
        backgroundGray: {
          main: "#F5F5F5",
        },
        text: {
          primary: "#0D0D0D",
          secondary: "#69666F",
        },
      },
    },
    dark: {
      palette: {
        secondary: {
          main: "#5062F0",
        },
        primary: {
          main: "#4556da",
        },
        backgroundGray: {
          main: "#252525",
        },
        text: {
          primary: "#FFF",
          secondary: "#EBE9F0",
        },
      },
    },
  },
});
