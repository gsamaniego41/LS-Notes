import React from "react";

const Card = props => {
  const {note} = props;
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </div>
  );
};

export default Card;
