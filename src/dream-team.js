const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
};
  let abbr = [];
  members.forEach(element => {
      if(typeof(element) === 'string') {
          let name = element.replace(/\s/g, "").slice(0, 1).toUpperCase()
          abbr.push(name)
      };
  });
    return abbr.sort().join('');
};
