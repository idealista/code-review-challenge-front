import container from "../bootstrap/IoC/container";
import { v4 as uuidv4 } from "uuid";

const setAds = (ads) => ({
  type: "SET_ADS",
  payload: ads
});

const startLoading = () => ({
  type: "START_LOADING"
});

const stopLoading = () => ({
  type: "STOP_LOADING"
});

const createNewAd = (ad) => ({
  type: "SET_NEW_ADS",
  payload: ad
});

const removeAd = (adId) => ({
  type: "REMOVE_AD",
  payload: adId
});

const setNewAdTitle = (title) => ({
  type: "SET_NEW_TITLE",
  payload: title
});

const getAds = () => (dispatch) => {
  dispatch(startLoading());
  container
    .get("GetAds")
    .execute()
    .then((ads) => {
      dispatch(setAds(ads));
      dispatch(stopLoading());
    })
    .catch(() => {
      dispatch(stopLoading());
    });
};

const addNewAd = (title) => (dispatch) => {
  const id = uuidv4();
  dispatch(
    createNewAd({
      id: id,
      title: title,
      active: true,
      kind: "REGULAR"
    })
  );
};
export default {
  setAds,
  startLoading,
  stopLoading,
  getAds,
  createNewAd,
  removeAd,
  setNewAdTitle,
  addNewAd
};
