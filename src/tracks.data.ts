import { TrackDTO } from "./typings/track.dto";

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
        `${process.env.PUBLIC_URL}/mp3/track.mp3`
    ),
    makeTrack(
        "Song 2",
        "Artist 2",
        "2:25",
        `${process.env.PUBLIC_URL}/mp3/track2.mp3`
    ),
    makeTrack(
        "Song 3",
        "Artist 3",
        "3:25",
        `${process.env.PUBLIC_URL}/mp3/track3.mp3`
    ),
    makeTrack(
        "Song 4",
        "Artist 4",
        "1:75",
        `${process.env.PUBLIC_URL}/mp3/track4.mp3`
    ),
    makeTrack(
        "Song 5",
        "Artist 5",
        "1:43",
        `${process.env.PUBLIC_URL}/mp3/track5.mp3`
    ),
    makeTrack(
        "Song 6",
        "Artist 6",
        "1:325",
        `${process.env.PUBLIC_URL}/mp3/track6.mp3`
    ),
    makeTrack(
        "Song 7",
        "Artist 7",
        "2:35",
        `${process.env.PUBLIC_URL}/mp3/track7.mp3`
    ),
//
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        `${process.env.PUBLIC_URL}/mp3/f1.mp3`
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        `${process.env.PUBLIC_URL}/mp3/f2.mp3`
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        `${process.env.PUBLIC_URL}/mp3/f3.mp3`
    ),
    makeTrack(
        "Song 7",
        "Ryo Fukui",
        "2:35",
        `${process.env.PUBLIC_URL}/mp3/f4.mp3`
    ),
];
