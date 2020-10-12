const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const isUndef = (val) => (val === undefined ? "" : val);

  const additionArr = (len) =>
    Array.from({ len }, () => `${isUndef(options.addition)}`);
  const addition = additionArr(options.additionRepeatTimes || 1).join(
    options.additionSeparator || "|"
  );

  const stringArr = (len) => Array.from({ len }, () => `${str}${addition}`);
  const result = stringArr(options.repeatTimes || 1).join(
    options.separator || "+"
  );

  return result;
};
