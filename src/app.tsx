import { Box } from "@material-ui/core";
import React from "react";
import BottomPanel from "./common/bottom-panel/bottom-panel";
import Header from "./common/molecules/header";
import Player from "./features/player/player";
//@ts-ignore
import audio from "./track.mp3";

const App = () => {
    return (
        <Box height="100%">
            <Header />
            <Box></Box>
            <BottomPanel 
                track={{
                    audio: audio,
                    authorName: "Sinzyo",
                    title: "My track"
                }} 
            />
        </Box>
    );
}

export default App;
