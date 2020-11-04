import { makeAutoObservable } from "mobx";
import { TrackDTO } from "../../typings/track.dto";
import { TrackStore } from "../track/track.store";

export class PlayerStore {
  audio: HTMLAudioElement;
  currentTrackIndex = 0;
  trackDuration = 0;
  tracksId: TrackDTO["id"][];
  isPlaying = false;
  isMuted = false;
  trackVolume = 1;
  trackIntervalId: NodeJS.Timeout | null = null;
  trackStore: TrackStore;

  constructor(
    tracksId: TrackDTO["id"][],
    trackStore: TrackStore
  ) {
    this.tracksId = tracksId;
    this.trackStore = trackStore;

    const track = trackStore.findTrackById(tracksId[0]);

    this.audio = new Audio(track.audio);

    this.audio.onloadedmetadata = () => {
      this.trackDuration = this.audio.duration;
    };

    makeAutoObservable(this);
  }

  setTracksId(tracksId: TrackDTO["id"][]) {
    this.tracksId = tracksId;
    this.currentTrackIndex = 0;

    this.updateAudio();
  }

  updateAudio() {
    this.audio.pause();

    const track = this.trackStore.findTrackById(this.tracksId[this.currentTrackIndex]);

    this.audio = new Audio(track.audio);

    if (this.isPlaying) {
      this.audio.oncanplay = () => {
        this.playAudio();
      };
    }

    this.audio.onloadedmetadata = () => {
      this.trackDuration = this.audio.duration;
    };
  }

  skipToNextTrack() {
    if (this.tracksId.length === this.currentTrackIndex + 1) {
      this.currentTrackIndex = 0;
    } else {
      this.currentTrackIndex = this.currentTrackIndex + 1;
    }

    this.updateAudio();
  }

  skipToPrevTrack() {
    if (this.currentTrackIndex !== 0) {
      this.currentTrackIndex = this.currentTrackIndex - 1;
    }

    this.updateAudio();
  }

  setCurrentTrack(index: number) {
    this.currentTrackIndex = index;
    if (this.trackIntervalId) {
      clearInterval(this.trackIntervalId);
      this.trackIntervalId = null;
    }

    this.updateAudio();
  }

  playAudio() {
    this.audio.play();
    this.isPlaying = true;
  }

  pauseAudio() {
    this.audio.pause();
    this.isPlaying = false;
  }

  muteAudio() {
    this.audio.muted = true;
    this.isMuted = true;
  }

  unmuteAudio() {
    this.audio.muted = false;
    this.isMuted = false;
  }

  changeVolumeValue(value: number) {
    this.trackVolume = value;
    this.audio.volume = value;
  }

  changeCurrentTrackTime(value: number) {
    this.audio.currentTime = value;
  }

  setTrackInterval(interval: NodeJS.Timeout) {
    this.trackIntervalId = interval;
  }

  clearTrackInterval() {
    if (this.trackIntervalId) {
      clearInterval(this.trackIntervalId);
      this.trackIntervalId = null;
    }
  }

  get currentTrackLast() {
      return this.trackStore
  }
}
