import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
    createStyles({
        bottomPanel: {
            height: 80,
            background: theme.palette.primary.light,
            width: "100%",
            position: "fixed",
            left: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            padding: 15
        }
    })
);
