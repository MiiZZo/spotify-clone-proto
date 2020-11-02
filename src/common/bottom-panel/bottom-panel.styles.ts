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
            justifyContent: "space-between",
            padding: 15
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
    })
);
