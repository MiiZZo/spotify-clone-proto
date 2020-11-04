import React, { useContext } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./nav-menu.styles";
import { PlaylistStoreContext } from "../../features/playlist/playlist-store.context";

const NavMenu = () => {
  const classes = useStyles();

  const playlistStore = useContext(PlaylistStoreContext)!;

  return (
    <Box width="200px" className={classes.navMenu}>
        <Typography className={classes.heading}>
            Playlists
        </Typography>
        {playlistStore?.playlists.map(({ title }) => (
          <Typography className={classes.playlistTitle}>{title}</Typography>
        ))}
    </Box>
  );
};

export default NavMenu;
