import { Box } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStyles } from "./app.styles";
import BottomPanel from "./common/bottom-panel/bottom-panel";
import Header from "./common/molecules/header";
import { PlayerStore } from "./features/player/player.store";
//@ts-ignore
import audio from "./track.mp3";
//@ts-ignore
import audio2 from "./track2.mp3";
//@ts-ignore
import audio3 from "./track3.mp3";
import { PlayerStoreContext } from "./features/player/player-store.context";

const App = observer(() => {
    const [playerStore] = useState(() => new PlayerStore([audio, audio2, audio3]));
    const classes = useStyles();    

    return (
        <PlayerStoreContext.Provider value={playerStore}>        
            <Box height="100%" className={classes.root}>
                <Header />
                <Box></Box>
                <BottomPanel />
            </Box>
        </PlayerStoreContext.Provider>
    );
});

export default App;
