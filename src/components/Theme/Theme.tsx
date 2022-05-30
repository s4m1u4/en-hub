import React, { FC } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { IThemeProps } from "./types";

export const Theme: FC<IThemeProps> = ({ children }) => {
  const selectedTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#fafafa",
        paper: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
