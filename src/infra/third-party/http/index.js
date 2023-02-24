import ads from "../../data/ads";

export default {
  get(url) {
    switch (url) {
      case "/get-ads":
        return Promise.resolve(ads);

      default:
        return Promise.resolve([]);
    }
  }
};
