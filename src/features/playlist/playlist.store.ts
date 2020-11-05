import { makeAutoObservable } from "mobx";
import { PlaylistDTO } from "../../typings/playlist.dto";

export class PlaylistStore {
  playlists: PlaylistDTO[] = [];
  playlistsMap: { [key: number]: PlaylistDTO } = {};

  constructor() {
    makeAutoObservable(this);
  }

  setPlaylists(playlists: PlaylistDTO[]) {
    this.playlists = playlists;

    this.playlists.forEach((playlist) => {
      this.playlistsMap[playlist.id] = playlist;
    })
  }
}
