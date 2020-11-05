import { Box } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStyles } from "./app.styles";
import BottomPanel from "./common/bottom-panel/bottom-panel";
import Header from "./common/molecules/header";
import { PlayerStore } from "./features/player/player.store";
import { PlayerStoreContext } from "./features/player/player-store.context";
import { PlaylistStore } from "./features/playlist/playlist.store";
import { PlaylistStoreContext } from "./features/playlist/playlist-store.context";
import { TrackStore } from "./features/track/track.store";
import { tracks } from "./tracks.data";
import NavMenu from "./common/nav-menu/nav-menu";
import { TrackStoreContext } from "./features/track/track-store.context";
import { routes } from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = routes.map(({ name, ...route }) => (
  <Route 
    key={name}
    {...route}
    exact={true}
  />
));

const App = observer(() => {
  const [playlistStore] = useState(() => new PlaylistStore());
  const [trackStore] = useState(() => new TrackStore(tracks))
  const [playerStore] = useState(
    () =>
      new PlayerStore(
        trackStore.tracks.map((track) => track.id),
        trackStore
      )
  );

  playlistStore.setPlaylists([
    {
      id: 1,
      title: "Playlist #1",
      tracks: tracks.slice(0, 7),
      description: "Playlist desc!",
    },
    {
      id: 2,
      title: "Playlist #2",
      tracks: tracks.slice(7, 11),
      description: "Playlist desc!!"
    }
  ]);

  const classes = useStyles();

  return (
    <TrackStoreContext.Provider value={trackStore}>
      <PlaylistStoreContext.Provider value={playlistStore}>
        <PlayerStoreContext.Provider value={playerStore}>
          <BrowserRouter>
              <Box height="100%" className={classes.root}>
                <Header />
                <Box display="flex">
                  <NavMenu />
                  <Switch>
                    {Routes}
                  </Switch>
                </Box>
                <BottomPanel />
              </Box>
          </BrowserRouter>
        </PlayerStoreContext.Provider>
      </PlaylistStoreContext.Provider>
    </TrackStoreContext.Provider>
  );
});

export default App;
