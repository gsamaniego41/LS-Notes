import React, {Component} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchNotes} from "../actions";

import theme from "../styles/theme";
import NavBar from "./Navigation/NavBar";
import CardList from "./View/Cards/CardList";

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

App.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  fetchNotes: PropTypes.func
};

const mapStateToProps = state => {
  return {notes: state.notes.notes};
};

export default connect(
  mapStateToProps,
  {fetchNotes}
)(App);
