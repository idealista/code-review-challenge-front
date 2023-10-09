import {
  SET_ADS,
  START_LOADING,
  STOP_LOADING,
  SET_NEW_ADS,
  REMOVE_AD,
  SET_NEW_TITLE
} from "./actions";

export default (state = {}, action = { type: "" }) => {
  switch (action.type) {
    case SET_ADS:
      return {
        ...state,
        ads: action.payload
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case SET_NEW_ADS:
      return {
        ...state,
        ads: [...state.ads, action.payload]
      };
    case REMOVE_AD:
      return {
        ...state,
        ads: [...state.ads.filter((ad) => ad.id !== action.payload)]
      };
    case SET_NEW_TITLE:
      return {
        ...state,
        newAdTitle: action.payload
      };
    default:
      return state;
  }
};
