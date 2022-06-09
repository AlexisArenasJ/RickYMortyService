import * as types from "./types";
const initialState = {
  episodes: [
    {
      air_date: "",
      characters: [],
      id: "",
      name: "",
      favorite: false,
    },
  ],
};

const AllEpisodes = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EPISODES:
      const payloadCopy = action.payload.map((ep) => {
        ep.favorite = false;
        return ep;
      });
      return { ...state, episodes: payloadCopy };

    case types.UPDATE_FAVORITE:
      const newState = state.episodes.map((ep) => {
        ep.id === action.payload && (ep.favorite = !ep.favorite);
        return ep;
      });
      return { ...state, episodes: newState };

    default:
      return state;
  }
};

export default AllEpisodes;
