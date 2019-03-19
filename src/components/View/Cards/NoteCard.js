import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import {FavoriteIcon, ShareIcon} from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class NoteCard extends React.Component {
  state = {expanded: false};

  render() {
    const {note} = this.props;
    return (
      <Card sm={3}>
        <CardHeader
          title={note.title}
          subheader="March 18, 2019"
          avatar={
            <Avatar src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg" />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        >
          <CardContent>
            <Typography component="p">{note.body}</Typography>
          </CardContent>
          <CardMedia />
        </CardHeader>
      </Card>
    );
  }
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
};

export default NoteCard;
