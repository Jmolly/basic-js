const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date && !(date instanceof Date) && date.getTime() === date.getTime())
    throw "Error";
  const month = date ? `${date.toLocaleString()}`.split("-")[1] : null;

  const seasons = {
    1: "winter",
    2: "winter",
    3: "spring",
    4: "spring",
    5: "spring",
    6: "summer",
    7: "summer",
    8: "summer",
    9: "fall",
    10: "fall",
    11: "fall",
    12: "winter",
  };

  return month ? seasons[month] : "Unable to determine the time of year!";
};
