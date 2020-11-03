import { createContext } from "react";
import { PlaylistStore } from "./playlist.store";

export const PlaylistStoreContext = createContext<PlaylistStore | undefined>(undefined);
