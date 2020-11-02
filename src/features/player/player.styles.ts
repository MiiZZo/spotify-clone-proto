import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    sliderWrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.palette.secondary.main
    },
    playerWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px"
    },
    controllsWrapper: {
        display: "flex"
    },
    slider: {
        width: "600px",
        margin: "0 15px",
        color: theme.palette.secondary.main
    },
    iconButton: {
      color: theme.palette.secondary.main
    },
    volumeSlider: {
      width: "100px",
      color: theme.palette.secondary.main
    },
    trackImage: {
      width: 50,
      height: 50,
      background: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.secondary.main,
      borderRadius: 5
    },
    trackTitle: {
        color: theme.palette.secondary.main
    },
    trackAuthor: {
        color: theme.palette.secondary.dark,
        fontSize: theme.typography.fontSize
    }
  }),
);
