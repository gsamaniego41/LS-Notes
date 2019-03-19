import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";

import NoteCard from "./NoteCard";

const NoteCardList = props => {
  return (
    <Grid container style={{marginTop: "100px"}}>
      {props.notes.map(note => {
        return (
          <Grid item sm={3} style={{margin: "10px"}}>
            <NoteCard key={note.id} note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

NoteCardList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};

export default NoteCardList;
