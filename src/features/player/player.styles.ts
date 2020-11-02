import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    sliderWrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.palette.secondary.main
    },
    playerWrapper: {
        maxWidth: "1000px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto"
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
    }
  }),
);
