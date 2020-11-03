import { TrackDTO } from "./track.dto";

export interface PlaylistDTO {
    id?: number;
    title: string;
    tracks: TrackDTO[];
    description?: string;
}
