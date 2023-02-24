import toImage from "../mappers/toImage";

export default (http) => ({
  getImages(locale) {
    return http.get("/get-images", locale).then(toImage);
  }
});
