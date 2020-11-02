import { TrackDTO } from "../../typings/track.dto";

export interface BottomPanelProps {
    track: TrackDTO,
    onChangeCurrentTrack: (value: number) => void; 
    handleChooseNextTrack: () => void;
    handleChoosePrevTrack: () => void;
}
