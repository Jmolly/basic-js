const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const isValid = typeof sample === "string" && typeof +sample !== "number";
  const result = isValid
    ? Math.ceil(
        Math.log2(MODERN_ACTIVITY / +sampleActivity) / 0.693 / HALF_LIFE_PERIOD
      )
    : false;

  return result;
};
