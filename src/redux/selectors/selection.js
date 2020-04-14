import get from "lodash/get";
import { createSelector } from "reselect";

export const getPlayers = store => get(store, "selection.players", []);

export const getTitulars = store => get(store, "selection.titulars", []);

export const getScrubs = store => get(store, "selection.scrubs", []);

export const countPlayers = createSelector(
    getPlayers,
    players => players.length
);

export const countTitulars = createSelector(
    getTitulars,
    titulars => titulars.length
);

export const countScrubs = createSelector(
    getPlayers, 
    scrubs => scrubs.length
);

export const countAllPlayers = createSelector(
    getPlayers,
    getTitulars,
    getScrubs,
    (players, titulars, scrubs) =>
        players.length + titulars.length + scrubs.length
);
