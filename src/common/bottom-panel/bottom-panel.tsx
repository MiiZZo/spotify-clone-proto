import { Box } from "@material-ui/core";
import React from "react";
import Player from "../../features/player/player";
import { useStyles } from "./bottom-panel.styles";

const BottomPanel = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bottomPanel}>
            <Player />
        </Box>
    );
}

export default BottomPanel;
