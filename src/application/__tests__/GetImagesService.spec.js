import { ONE_HUNDRED } from "../../domain/constants";
import GetImagesService from "../GetImagesService";
import Image from "../../domain/image";

// mock window
window.config = {
  locale: ""
};

const repository = {
  getImages(locale) {
    if (locale === "es") {
      return [Image.from({ url: "test.com", w: ONE_HUNDRED, h: ONE_HUNDRED })];
    }

    return [];
  }
};

describe("GetImagesService tests", () => {
  test("Given no params, GetImagesService must return an empty array", () => {
    window.config.locale = "";
    const res = GetImagesService(repository)();
    expect(res.length).toBe(0);
  });

  test("Given locale 'es', GetImagesService must return an array with one image", () => {
    window.config.locale = "es";
    const res = GetImagesService(repository)();
    expect(res.length).toBe(1);
    expect(res[0].url).toEqual("test.com");
  });
});

// image tests
describe("Image tests", () => {
  test("Given a 2x2 image, getAspectRation must return 1", () => {
    window.config.locale = "es";
    const img = Image.from({ url: "", w: 2, h: 2 });

    expect(img.getAspectRatio()).toBe(1);
  });
});
