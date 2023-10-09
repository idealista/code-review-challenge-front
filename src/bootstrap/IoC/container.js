export default {
  deps: {},

  add(name, dep) {
    this.deps[name] = dep;
  },

  get(name) {
    const dep = this.deps[name];

    if (typeof dep === "function") {
      return dep();
    }

    return dep;
  }
};
