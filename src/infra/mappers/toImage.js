import Image from "../../domain/image";

export default ({ url, height, width }) =>
  Image.from({
    url,
    height,
    width
  });
