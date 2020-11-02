import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    sliderWrapper: {
        display: "flex",
        alignItems: "center",
    },
    playerWrapper: {
        maxWidth: "1000px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    controllsWrapper: {
        display: "flex"
    },
    slider: {
        width: "600px",
        margin: "0 15px"
    }
  }),
);
