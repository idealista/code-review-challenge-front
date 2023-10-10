import container from "../bootstrap/IoC/container";
import { v4 as uuidv4 } from "uuid";

export const SET_ADS = "SET_ADS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const SET_NEW_ADS = "SET_NEW_ADS";
export const REMOVE_AD = "REMOVE_AD";
export const SET_NEW_TITLE = "SET_NEW_TITLE";

const setAds = (ads) => ({
  type: SET_ADS,
  payload: ads
});

const startLoading = () => ({
  type: START_LOADING
});

const stopLoading = () => ({
  type: STOP_LOADING
});

const createNewAd = (ad) => ({
  type: SET_NEW_ADS,
  payload: ad
});

const removeAd = (adId) => ({
  type: REMOVE_AD,
  payload: adId
});

const setNewAdTitle = (title) => ({
  type: SET_NEW_TITLE,
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
      // Aquí se podría lanzar un console.error("Error al obtener los anuncios:", error);
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
