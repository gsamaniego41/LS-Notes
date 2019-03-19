import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Avatar
} from "@material-ui/core";
import {Home, Inbox, Settings} from "@material-ui/icons";

const Menu = props => {
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

      {/* ======= TOPICS ======== */}
      <Typography variant="caption">TOPICS</Typography>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png" />
        </ListItemIcon>
        <ListItemText primary="react" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" />
        </ListItemIcon>
        <ListItemText primary="redux" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" />
        </ListItemIcon>
        <ListItemText primary="node" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://miro.medium.com/max/480/1*O_NwDtfHb1sirw6CAbyoxg.png" />
        </ListItemIcon>
        <ListItemText primary="less" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1550818039" />
        </ListItemIcon>
        <ListItemText primary="javascript" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar src="https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1550818039" />
        </ListItemIcon>
        <ListItemText primary="es6" />
      </ListItem>
    </List>
  );
};

export default Menu;
