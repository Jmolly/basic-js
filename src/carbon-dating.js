const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
  const isValid =
    typeof sample === "string" &&
    typeof +sample === "number" &&
    +sample > 0 &&
    +sample < 15;
  const result = isValid
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / +sample) / (Math.log(2) / HALF_LIFE_PERIOD)
      )
    : false;

  return result;
};
