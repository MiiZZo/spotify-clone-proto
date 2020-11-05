import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => (
    createStyles({
        navMenu: {
            background: theme.palette.primary.dark,
            height: "100vh"
        },
        heading: {
            marginTop: "20px",
            marginLeft: "15px",
            color: theme.palette.common.white,
            fontWeight: theme.typography.fontWeightLight,
            marginBottom: "10px"
        },
        listItem: {
          color: theme.palette.common.white
        }
    })
));
