import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            background: theme.palette.primary.main,
            height: "100vh"
        }
    })
);
