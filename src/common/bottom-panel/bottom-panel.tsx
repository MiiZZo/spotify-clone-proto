import { Box, Typography } from "@material-ui/core";
import { MusicNote } from "@material-ui/icons";
import React from "react";
import Player from "../../features/player/player";
import { useStyles } from "./bottom-panel.styles";
import { BottomPanelProps } from "./bottom-panel.props";

const BottomPanel = ({ track, onChangeCurrentTrack, handleChooseNextTrack, handleChoosePrevTrack }: BottomPanelProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.bottomPanel}>
            <Player 
                track={track} 
                onChangeCurrentTrack={onChangeCurrentTrack} 
                handleChooseNextTrack={handleChooseNextTrack} 
                handleChoosePrevTrack={handleChoosePrevTrack} 
            />
        </Box>
    );
}

export default BottomPanel;
