import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <Card key={note.id} note={note} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};

export default CardList;
