import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./app.styles";
import BottomPanel from "./common/bottom-panel/bottom-panel";
import Header from "./common/molecules/header";
import Player from "./features/player/player";
//@ts-ignore
import audio from "./track.mp3";
//@ts-ignore
import audio2 from "./track2.mp3";
//@ts-ignore
import audio3 from "./track3.mp3";
import { TrackDTO } from "./typings/track.dto";

const App = () => {
    const classes = useStyles();

    const playlist: TrackDTO[] = [
        {
            audio: audio,
            authorName: 'Myosuki',
            title: 'My sound',
        },
        {
            audio: audio2,
            authorName: 'Tyosuki',
            title: 'Your sound',
        },
        {
            audio: audio3,
            authorName: 'Zyosuki',
            title: 'My name',
        }
    ];

    const [currentTrack, setCurrentTrack] = useState(0);

    const handleChangeCurrentTrack =  (value: number) => {
        setCurrentTrack(2);
    }
    
    const handleChoosePrevTrack = () => {
        if (currentTrack === 0) {
            setCurrentTrack(0);
        } else {
            setCurrentTrack(currentTrack - 1);
        }
    }

    const handleChooseNextTrack = () => {
        if (currentTrack === playlist.length - 1) {
            setCurrentTrack(0);
        } else {
            setCurrentTrack(currentTrack + 1);
        }
    }

    return (
        <Box height="100%" className={classes.root}>
            <Header />
            <Box></Box>
            <BottomPanel
                handleChoosePrevTrack={handleChoosePrevTrack}
                handleChooseNextTrack={handleChooseNextTrack}
                onChangeCurrentTrack={handleChangeCurrentTrack}
                track={playlist[currentTrack]} 
            />
        </Box>
    );
}

export default App;
