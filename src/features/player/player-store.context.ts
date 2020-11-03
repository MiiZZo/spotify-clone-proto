import { createContext } from "react";
import { PlayerStore } from "./player.store";

export const PlayerStoreContext = createContext<PlayerStore | undefined>(undefined);
