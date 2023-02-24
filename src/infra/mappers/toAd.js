import Ad from "../../domain/ad";

export default ({ id, title, kind, active } = {}) =>
  Ad.of({
    id,
    title,
    status: active,
    type: kind
  });
