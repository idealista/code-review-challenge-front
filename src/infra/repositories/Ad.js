import toAd from "../mappers/toAd";

export default (http) => ({
  async getAds() {
    const ads = await http.get("/get-ads");

    return ads.map(toAd);
  }
});
