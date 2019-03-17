import React, {Component} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {fetchNotes} from "../actions";

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

const mapStateToProps = ({notes}) => ({notes});

export default connect(
  mapStateToProps,
  {fetchNotes}
)(App);
