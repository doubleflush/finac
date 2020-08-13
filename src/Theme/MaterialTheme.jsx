import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import colorScheme from './colorScheme.json';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorScheme.primary,
    },
    secondary: {
      main: colorScheme.secondary,
    },
  },
});

export const MuiTheme = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
