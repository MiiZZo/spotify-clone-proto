import { Box } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStyles } from "./app.styles";
import BottomPanel from "./common/bottom-panel/bottom-panel";
import Header from "./common/molecules/header";
import { PlayerStore } from "./features/player/player.store";
import { PlayerStoreContext } from "./features/player/player-store.context";
import PlaylistPage from "./features/playlist/playlist-page";
import { PlaylistStore } from "./features/playlist/playlist.store";
import { PlaylistStoreContext } from "./features/playlist/playlist-store.context";

const App = observer(() => {
  const [playlistStore] = useState(() => new PlaylistStore());
  const [playerStore] = useState(
    () =>
      new PlayerStore(
        playlistStore.playlists[0].tracks.map((track) => track.audio)
      )
  );
  const classes = useStyles();

  return (
    <PlaylistStoreContext.Provider value={playlistStore}>
      <PlayerStoreContext.Provider value={playerStore}>
        <Box height="100%" className={classes.root}>
          <Header />
          <PlaylistPage />
          <BottomPanel />
        </Box>
      </PlayerStoreContext.Provider>
    </PlaylistStoreContext.Provider>
  );
});

export default App;
