import React, {Component} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";

import theme from "../styles/theme";
import NavBar from "./Navigation/NavBar";
import CardList from "./View/Cards/CardList";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <CardList />
      </MuiThemeProvider>
    );
  }
}

export default App;
