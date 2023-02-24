import actions from "./actions";

export default (state = {}, action = { type: "" }) => {
  switch (action.type) {
    case actions.setAds().type:
      return {
        ...state,
        ads: action.payload
      };
    case actions.startLoading().type:
      return {
        ...state,
        isLoading: true
      };
    case actions.stopLoading().type:
      return {
        ...state,
        isLoading: false
      };
    case actions.createNewAd().type:
      return {
        ...state,
        ads: [...state.ads, action.payload]
      };
    case actions.removeAd().type:
      return {
        ...state,
        ads: [...state.ads.filter((ad) => ad.id !== action.payload)]
      };
    case actions.setNewAdTitle().type:
      return {
        ...state,
        newAdTitle: action.payload
      };
    default:
      return state;
  }
};
