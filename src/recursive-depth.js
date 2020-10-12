const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;

    if (Array.isArray(arr)) {
      for (let index in arr) {
        let depth = this.calculateDepth(arr[index]);

        if (depth > maxDepth) maxDepth = depth;
      }
      maxDepth = maxDepth + 1;
    }

    return maxDepth;
  }
};
