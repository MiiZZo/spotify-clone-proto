import { TrackDTO } from "../../typings/track.dto";

export interface PlayerProps {
    track: TrackDTO;
    handleChooseNextTrack: () => void;
    handleChoosePrevTrack: () => void;
}
