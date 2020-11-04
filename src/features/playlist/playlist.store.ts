import { makeAutoObservable } from "mobx";
import { PlaylistDTO } from "../../typings/playlist.dto";

export class PlaylistStore {
    playlists: PlaylistDTO[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setPlaylists(playlists: PlaylistDTO[]) {
        this.playlists = playlists;
    }
}
