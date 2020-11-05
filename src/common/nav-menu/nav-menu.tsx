import React, { useContext } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { useStyles } from "./nav-menu.styles";
import { PlaylistStoreContext } from "../../features/playlist/playlist-store.context";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const classes = useStyles();

  const playlistStore = useContext(PlaylistStoreContext)!;

  return (
    <Box width="200px" className={classes.navMenu}>
        <ListItem className={classes.listItem} button component={Link} to="/">
          <ListItemText>Songs</ListItemText>
        </ListItem>
        <Typography className={classes.heading}>
            Playlists
        </Typography>
        <List component="nav">
          {playlistStore.playlists.map(({ id, title }) => (
            <ListItem className={classes.listItem} key={id} button component={Link} to={`/playlists/${id}`}>
              <ListItemText>{title}</ListItemText>
            </ListItem>
          ))}
        </List>
    </Box>
  );
};

export default NavMenu;
