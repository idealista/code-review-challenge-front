import AdTypes from "./adTypes";

function Ad(id, title, status, type) {
  return {
    id,
    title,
    isActive() {
      return status;
    },
    get type() {
      if (!type) return "NONE";
      return AdTypes[type.toUpperCase()];
    }
  };
}

Ad.of = ({ id, title, status, type } = {}) => Ad(id, title, status, type);

export default Ad;
