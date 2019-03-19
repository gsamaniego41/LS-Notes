import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Divider,
  Typography,
  Avatar
} from "@material-ui/core";
import {Home, Inbox, Settings} from "@material-ui/icons";

const styles = {
  Avatar: {
    width: "20px",
    height: "20px"
  }
};

const Menu = props => {
  return (
    <List style={{marginTop: "70px"}}>
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
        <ListItemAvatar>
          <Avatar
            src="https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="react" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="redux" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="node" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            src="https://miro.medium.com/max/480/1*O_NwDtfHb1sirw6CAbyoxg.png"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="less" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            src="https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1550818039"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="javascript" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            src="https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1550818039"
            style={styles.Avatar}
          />
        </ListItemAvatar>
        <ListItemText secondary="es6" />
      </ListItem>
    </List>
  );
};

export default Menu;
