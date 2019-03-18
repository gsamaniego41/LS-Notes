import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const AddButton = props => {
  const {classes} = props;
  console.log(classes);
  return (
    <div>
      <Fab color="secondary" aria-label="Add" position="fixed">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddButton;
