import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backgroundGray: {
      main: string;
    };
  }

  interface PaletteOptions {
    backgroundGray?: {
      main: string;
    };
  }
}
