import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    playlistImage: {
        width: "200px",
        height: "200px",
        background: theme.palette.primary.dark
    },
    playlistTitle: {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.fontWeightMedium
    },
    playlistAuthor: {
        color: theme.palette.secondary.dark,
        fontWeight: theme.typography.fontWeightLight,
        fontSize: 16
    },
    playlistImageIcon: {
        width: "50px",
        height: "50px",
    },
    playButton: {
      width: "115px"
    },
    favoriteButton: {
      marginLeft: "10px"
    },
    table: {
      marginTop: "50px",
      background: theme.palette.primary.main,
    },
    text: {
      fontWeight: theme.typography.fontWeightLight
    }
  })
);
