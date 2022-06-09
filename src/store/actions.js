import * as types from "./types";

export const fecthEpisodes = (epInfo) => ({
  type: types.FETCH_EPISODES,
  payload: epInfo,
});

export const updateFavorite = (epInfo) => ({
  type: types.UPDATE_FAVORITE,
  payload: epInfo,
});

export const removeFavorite = (epInfo) => ({
  type: types.REMOVE_FAVORITE,
  payload: epInfo,
});

export const setFavorite = (id) => ({
  type: types.CHANGE_ICON_FAVORITE,
  payload: id,
});
