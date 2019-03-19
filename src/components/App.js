import React, {Component} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchNotes} from "../actions";
import {Grid} from "@material-ui/core";

import theme from "../styles/theme";
import NavBar from "./Navigation/NavBar";
import NoteCardList from "./View/Cards/NoteCardList";
import AddButton from "./View/Buttons/AddButton";
import Menu from "./Menu/Menu";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Grid container>
          <Grid item>
            <Menu />
          </Grid>
          <Grid item>
            <NoteCardList notes={this.props.notes} />
          </Grid>
        </Grid>
        <AddButton />
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
