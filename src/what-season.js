const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  let now = new Date();
  if(date.getMonth!=now.getMonth) {
    throw new Error()
  }

  let month = date.getMonth()
  console.log(month)
  if(month === 0 || month === 1 || month === 11) {
    return 'winter'
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer'
  } else {
    return "autumn"
  }
};
