import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.grey[900],
      light: "#4D4D4D",
      dark: "#171717"
    },
    secondary: {
      main: colors.grey[50],
      light: "#FBFBFB",
      dark: "#AFAFAF"
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          width: "100%",
          height: "100%"
        },
        body: {
          width: "100%",
          height: "100%"
        }
      },
    },
  },
});
