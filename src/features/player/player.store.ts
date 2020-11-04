import { makeAutoObservable } from "mobx";
import { TrackDTO } from "../../typings/track.dto";

export class PlayerStore {
    audio: HTMLAudioElement;
    currentTrackIndex = 0;
    trackDuration = 0;
    trackList: TrackDTO["audio"][];
    isPlaying = false;
    isMuted = false;
    trackVolume = 1;
    trackIntervalId: NodeJS.Timeout | null = null;

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

        if (this.isPlaying) {
            this.audio.oncanplay = () => {
                this.playAudio();
            }
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
}
