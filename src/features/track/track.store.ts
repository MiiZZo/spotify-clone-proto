import { makeAutoObservable } from "mobx";
import { TrackDTO } from "../../typings/track.dto";

export class TrackStore {
  tracksMap: { [keys: number]: TrackDTO } = {};

  constructor(public tracks: TrackDTO[]) {
    tracks.forEach((track) => {
      this.tracksMap[track.id] = track;
    });

    makeAutoObservable(this);
  }

  setTracks(tracks: TrackDTO[]) {
    this.tracks = tracks;
  }

  findTrackById(trackId: number) {
      return this.tracksMap[trackId];
  }
}
