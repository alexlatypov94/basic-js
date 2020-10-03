const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }

  encrypt(message, key) {
  if(!message || !key) throw new Error();
  let a = 97
  let re = /[^A-Z]/gi
  let strM = message.toLowerCase().replace(/[\s]/gi, "")
  let str = message.toLowerCase().replace(re, "").split('')
  if(str.length > key.length) {
    let endCycle = Math.ceil(message.length / key.length)
    
      for (let n = 0; n <= endCycle; n++) {
        key += key
    }
  }
  let newKey = key.replace(re, "").toLowerCase().slice(0, str.length).split('')
  let resultArr = []
  for (let i = 0; i < str.length; i ++) {
      resultArr.push(String.fromCharCode((((str[i].charCodeAt() - a) + (newKey[i].charCodeAt() - a)) % 26) + a))
  }
  for (let j = 0; j < newKey.length; j++) {
    newKey[j] = newKey[j].charCodeAt() - a
  }
  
  let result = resultArr.join('')
  let ost = strM.slice(result.length)
  let string = result + ost
  let stringSplit = string.split('')
  let pos
  while (true) {
      let foundPos = message.indexOf(" ", pos);
      if (foundPos == -1) break;
      pos = foundPos + 1;
      stringSplit.splice(pos - 1, 0, " ")
    }
    return this.type ? stringSplit.join('').toUpperCase() : stringSplit.reverse().join('').toUpperCase();
}

  decrypt(message, key) {
    if(!message || !key) throw new Error();
    let a = 97
  let re = /[^A-Z]/gi
  let strM = message.toLowerCase().replace(/[\s]/gi, "")
  let str = message.toLowerCase().replace(re, "").split('')
  if(str.length > key.length) {
    let endCycle = Math.ceil(message.length / key.length)
      for (let n = 0; n <= endCycle; n++) {
        key += key
    }
  }
  let newKey = key.replace(re, "").toLowerCase().slice(0, str.length).split('')
  let resultArr = []
  for (let i = 0; i < str.length; i ++) {
      resultArr.push(String.fromCharCode((((str[i].charCodeAt() - a) + 26 - (newKey[i].charCodeAt() - a)) % 26) + a))
  }
  for (let j = 0; j < newKey.length; j++) {
    newKey[j] = newKey[j].charCodeAt() - a
  }
  
  let result = resultArr.join('')
  let ost = strM.slice(result.length)
  let string = result + ost
  let stringSplit = string.split('')
  let pos
  while (true) {
      let foundPos = message.indexOf(" ", pos);
      if (foundPos == -1) break;
      pos = foundPos + 1;
      stringSplit.splice(pos - 1, 0, " ")
    }
    return this.type ? stringSplit.join('').toUpperCase() : stringSplit.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
