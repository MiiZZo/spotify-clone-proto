import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./header.styles";
import { AccountCircle } from "@material-ui/icons";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Spotify
                </Typography>
                <IconButton>
                    <AccountCircle className={classes.iconColor} />
                </IconButton>
                <Typography variant="h6">MiiZZo</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
