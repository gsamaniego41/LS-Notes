import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  const {note} = props;
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </div>
  );
};

Card.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
};

export default Card;
