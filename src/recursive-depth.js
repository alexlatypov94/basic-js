const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, count = 0, array = []) {
    count++
    array.push(count)
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i], count, array)
        }
      }
    return Math.max(...array)
  }
};