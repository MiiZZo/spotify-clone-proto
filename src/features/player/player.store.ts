import { makeAutoObservable } from "mobx";
import { TrackDTO } from "../../typings/track.dto";

export class PlayerStore {
    audio: HTMLAudioElement;
    currentTrackIndex = 0;
    trackDuration = 0;
    trackList: TrackDTO["audio"][];
    isPlaying = false;
    isMuted = false;
    currentTrackTime = 0;
    trackVolume = 1;

    constructor(trackList: TrackDTO["audio"][]) {
        this.audio = new Audio(trackList[0]);
        this.trackList = trackList;

        this.audio.onloadedmetadata = () => {
            this.trackDuration = this.audio.duration;
        }

        makeAutoObservable(this);
    }

    setCurrentPlaylist(trackList: TrackDTO["audio"][]) {
        this.trackList = trackList;
    }

    updateAudio() {
        this.audio.pause();
        this.audio = new Audio(this.trackList[this.currentTrackIndex]);

        this.audio.oncanplay = () => {
            this.playAudio();
        }

        this.audio.onloadedmetadata = () => {
            this.trackDuration = this.audio.duration;
        }
    }

    skipToNextTrack() {
        if (this.trackList.length === this.currentTrackIndex + 1) {
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
        this.currentTrackTime = value;
        this.audio.currentTime = value;
    }
}
