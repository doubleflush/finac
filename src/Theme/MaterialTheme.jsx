import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#880061",
    },
    secondary: {
      main: "#ee0290",
    },
  },
});

export const MuiTheme = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
