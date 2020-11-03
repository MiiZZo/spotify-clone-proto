import { makeAutoObservable } from "mobx";
import { PlaylistDTO } from "../../typings/playlist.dto";
//@ts-ignore
import audio1 from "../../track.mp3";
//@ts-ignore
import audio2 from "../../track2.mp3";
//@ts-ignore
import audio3 from "../../track3.mp3";
//@ts-ignore
import audio4 from "../../track4.mp3";
//@ts-ignore
import audio5 from "../../track5.mp3";
//@ts-ignore
import audio6 from "../../track6.mp3";
//@ts-ignore
import audio7 from "../../track7.mp3";

const makeTrack = (audio: any) => (
    {
        id: Math.random(),
        title: "Make song!",
        description: "Song desc",
        author: "Hiyomo",
        audio: audio,
        duration: "1:23",
        createdAt: "20-02-2020"
    } as any
) 

export class PlaylistStore {
    playlists: PlaylistDTO[] = [{
        title: "Make it!",
        description: "Mega desc!",
        tracks: [
            makeTrack(audio1),
            makeTrack(audio2),
            makeTrack(audio3),
            makeTrack(audio4),
            makeTrack(audio5),
            makeTrack(audio6),
            makeTrack(audio7),
        ]
    }];

    constructor() {
        makeAutoObservable(this);
    }
}
