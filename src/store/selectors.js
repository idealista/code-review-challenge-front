export default {
  getActiveAds: (
    state = {
      ads: []
    }
  ) => {
    return state.ads.filter((ad) => ad.active);
  }
};
