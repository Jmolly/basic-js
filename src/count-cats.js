const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError("Not implemented");
  let result = 0;

  matrix.forEach((element) => {
    element.forEach((el) => (el === "^^" ? result++ : null));
  });

  return result;
};
