const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  Array.isArray(members) &&
    members.forEach((element) => {
      result =
        typeof element === "string"
          ? [...result, element.trim()[0].toUpperCase()]
          : result;
    });

  return result.sort().join("");
};
