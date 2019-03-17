import React, {Component, useState, useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {fetchNotes} from "../actions";

import theme from "../styles/theme";
import NavBar from "./Navigation/NavBar";
import CardList from "./View/Cards/CardList";

/* === Attempt at Hooks ===
const App = props => {
  console.log(props);
  // const [notes, setNotes] = useState([]);

  useEffect(() => props.fetchNotes());

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <CardList notes={props.notes} />
    </MuiThemeProvider>
  );
}; 
*/

class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <CardList notes={this.props.notes} />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {notes: state.notes.notes};
};

export default connect(
  mapStateToProps,
  {fetchNotes}
)(App);
