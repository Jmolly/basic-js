const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links = [...this.links, `( ${value} )`];
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== "number") {
      this.links = [];
      throw e;
    }
    if (position < this.links.length) {
      this.links.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.links = this.links.reverse();
    return this;
  },
  finishChain() {
    const result = this.links.join("~~");
    this.links = [];

    return result;
  },
};

module.exports = chainMaker;
