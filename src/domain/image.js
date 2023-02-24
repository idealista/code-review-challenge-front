import { SCREEN_W, SCREEN_H } from "./screen";
import { TWO } from "./constants";

function Image(url, width, height) {
  return {
    url,

    getAspectRatio() {
      return width / height;
    },

    getScreenDiagonal() {
      return Math.sqrt((Math.pow(SCREEN_W, TWO) + SCREEN_H) ^ TWO);
    }
  };
}

Image.from = ({ url, w, h }) => Image(url, w, h);

export default Image;
