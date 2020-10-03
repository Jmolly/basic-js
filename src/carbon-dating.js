const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result = !validate(sampleActivity) ? false : 0;

  return result;
};

const validate = (sample) => {
  return typeof sample === "string" && typeof +sample !== "number";
};
