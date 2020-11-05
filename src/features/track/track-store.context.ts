import { createContext } from "react";
import { TrackStore } from "./track.store";

export const TrackStoreContext = createContext<TrackStore | undefined>(undefined);
