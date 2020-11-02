import React from "react";
import Header from "./common/molecules/header";
import Player from "./features/player/player";
//@ts-ignore
import audio from "./track.mp3";

const App = () => {
    return (
        <>
            <Player audio={audio} />
            <Header />
        </>
    );
}

export default App;
