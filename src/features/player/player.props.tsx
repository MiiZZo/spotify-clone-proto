import { TrackDTO } from "../../typings/track.dto";

export interface PlayerProps {
    track: TrackDTO;
    onChangeCurrentTrack: (value: number) => void;
    handleChooseNextTrack: () => void;
    handleChoosePrevTrack: () => void;
}
