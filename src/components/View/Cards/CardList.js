import React from "react";
import {notes} from "../../../dummy-data";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      {notes.map(note => {
        return <Card note={note} />;
      })}
    </div>
  );
};

export default CardList;
