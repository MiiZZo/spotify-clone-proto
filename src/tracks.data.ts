import { TrackDTO } from "./typings/track.dto";
//@ts-ignore
import track from "./track.mp3";
//@ts-ignore
import track2 from "./track2.mp3";
//@ts-ignore
import track3 from "./track3.mp3";
//@ts-ignore
import track4 from "./track4.mp3";
//@ts-ignore
import track5 from "./track5.mp3";
//@ts-ignore
import track6 from "./track6.mp3";
//@ts-ignore
import track7 from "./track7.mp3";
//@ts-ignore
import f1 from "./f1.mp3";
//@ts-ignore
import f2 from "./f2.mp3";
//@ts-ignore
import f3 from "./f3.mp3";
//@ts-ignore
import f4 from "./f4.mp3";


const makeTrack = (title: string, author: string, duration: string, audio: any) => (
    {
        id: Math.random(),
        title,
        description: "Song desc",
        author,
        audio,
        duration: duration as any,
        createdAt: "20-02-2020" as any
    }
);

export const tracks: TrackDTO[] = [
    makeTrack(
        "Song 1",
        "Artist 1",
        "1:25",
        track
    ),
    makeTrack(
        "Song 2",
        "Artist 2",
        "2:25",
        track2
    ),
    makeTrack(
        "Song 3",
        "Artist 3",
        "3:25",
        track3
    ),
    makeTrack(
        "Song 4",
        "Artist 4",
        "1:75",
        track4
    ),
    makeTrack(
        "Song 5",
        "Artist 5",
        "1:43",
        track5
    ),
    makeTrack(
        "Song 6",
        "Artist 6",
        "1:325",
        track6
    ),
    makeTrack(
        "Song 7",
        "Artist 7",
        "2:35",
        track7
    ),
//
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        f1
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        f2
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        f3
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        f4
    ),
];
