import React, {Component} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";

import theme from "../styles/theme";
import NavBar from "./Navigation/NavBar";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
