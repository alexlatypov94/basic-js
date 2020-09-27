const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
      return chainMaker.arr.length
  },
  addLink(value) {
    chainMaker.arr.push(value)
    return chainMaker
  },
  removeLink(position) {
  if (Number.isInteger(position) !== true || position === "" || chainMaker.arr[position] === undefined) {
    chainMaker.arr = [];
    throw new Error()
  }
    chainMaker.arr.splice(position - 1, 1)
    return chainMaker
  },
  reverseChain() {
    chainMaker.arr.reverse()
    return chainMaker
  },
  finishChain() {
    let str = ''
    chainMaker.arr.forEach((el, i) => {
      str += (i === 0) ? `( ${el} )` : `~~( ${el} )` 
    })
    chainMaker.arr = []
    return str
  }
};

module.exports = chainMaker;
