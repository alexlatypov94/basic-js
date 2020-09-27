const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let string = ""
  let arr = []
  if (str !== String) {
    str = str + ""
  }
  if(options.repeatTimes === undefined) {
      options.repeatTimes = 1
  }
  if(options.addition === undefined) {
    options.addition = ""
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(str)
    }
  
  if(options.repeatTimes&& options.separator) {
    for (let i = 0; i < arr.length; i++) {
      if(i > 0) {
        arr[i] = options.separator + arr[i]
      }
      if(options.addition !== "") {
        for (let j = 0; j < options.additionRepeatTimes; j++){
          if(options.additionSeparator) {
            arr[i] = arr[i] + options.addition + options.additionSeparator
          } else {
            arr[i] = arr[i] + options.addition
          }
        }
      }
      if(options.additionSeparator && options.additionRepeatTimes !== undefined) {
        arr[i] = arr[i].slice(0, -(options.additionSeparator.length))
      }
    }
  } 
  else {
    for (let i = 0; i < arr.length; i++) {
      if(i > 0) {
        arr[i] = '+' + arr[i]
      }
    }
  }
  return arr.join('')
};
  