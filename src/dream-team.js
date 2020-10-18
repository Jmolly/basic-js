const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  members.forEach((element) => {
    result = typeof element === "string" ? [...result, element[0]] : result;
  });

  return result.sort().join("");
};
