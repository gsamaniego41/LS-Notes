import React from "react";
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

export default CardList;
