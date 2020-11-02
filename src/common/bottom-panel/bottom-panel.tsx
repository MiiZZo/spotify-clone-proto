import { Box, Typography } from "@material-ui/core";
import { MusicNote } from "@material-ui/icons";
import React from "react";
import Player from "../../features/player/player";
import { useStyles } from "./bottom-panel.styles";
import { BottomPanelProps } from "./bottom-panel.props";

const BottomPanel = ({ track }: BottomPanelProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.bottomPanel}>
            <Box display="flex">
                {!track.imgUrl && (
                    <Box className={classes.trackImage}>
                        <MusicNote />
                    </Box>
                )}
                <Box marginLeft="5px">
                    <Typography className={classes.trackTitle}>{track.title}</Typography>
                    <Typography className={classes.trackAuthor}>{track.authorName}</Typography>
                </Box>
            </Box>
            <Player audio={track.audio} />
            <Box></Box>
        </Box>
    );
}

export default BottomPanel;
