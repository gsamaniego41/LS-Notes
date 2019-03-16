import React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

const NavBar = props => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography>Lambda Notes</Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
