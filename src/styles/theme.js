import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4e2f",
      main: "#c60000",
      dark: "#8d0000",
      contrastText: "#fff"
    }
  }
});

export default theme;
