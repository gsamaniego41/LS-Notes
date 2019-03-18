import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  Button: {
    position: "absolute",
    bottom: "30px",
    right: "30px"
  }
};

const AddButton = () => {
  return (
    <div>
      <Fab color="secondary" aria-label="Add" style={styles.Button}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddButton;
