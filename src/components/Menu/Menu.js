import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from "@material-ui/core";
import {Home, Inbox, Settings} from "@material-ui/icons";

const Menu = () => {
  return (
    <List style={{marginTop: "100px"}}>
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <Divider />
      <Typography variant="caption">TOPICS</Typography>
    </List>
  );
};

export default Menu;
