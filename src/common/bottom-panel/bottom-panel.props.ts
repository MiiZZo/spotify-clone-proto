import { TrackDTO } from "../../typings/track.dto";

export interface BottomPanelProps {
    track: TrackDTO;
    handleChooseNextTrack: () => void;
    handleChoosePrevTrack: () => void;
}
