const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw e;
  let result = [];
  let skipNext = false;

  arr.forEach((el, index) => {
    if (skipNext) {
      skipNext = false;
    } else {
      switch (el) {
        case "--discard-next":
          result = [...result, undefined, undefined];
          skipNext = true;
          break;

        case "--discard-prev":
          result[result.length - 1] = undefined;
          result = [...result, undefined];
          break;

        case "--double-next":
          result = [...result, arr[index + 1]];
          break;

        case "--double-prev":
          result = [...result, result[result.length - 1]];
          break;

        default:
          result = [...result, el];
      }
    }
  });
  return result.filter((el) => el !== undefined);
};
