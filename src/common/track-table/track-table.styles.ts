import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => (
  createStyles({
    currentTrack: {
      background: `rgba(255, 255, 255, 0.1)`
    },
    tableRow: {
      cursor: "pointer"
    },
    table: {
      background: theme.palette.primary.main,
    }
  })
));
