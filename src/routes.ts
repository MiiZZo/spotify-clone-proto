import React from "react";
import PlaylistPage from "./features/playlist/playlist-page";
import TrackPage from "./features/track/track-page";

interface Route {
  name: string;
  path: string;
  component: React.FC<any>;
}

export const routes: Route[] = [
  {
    name: 'playlist',
    path: '/playlists/:id',
    component: PlaylistPage
  },
  {
    name: 'home',
    path: '/',
    component: TrackPage
  }
];
