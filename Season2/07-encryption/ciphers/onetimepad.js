const alphabet = require("./alphabet");
const pads = require("../data/pads");

const offsets = function(text, pad, encrypting=true){
  const out = [], chars=text.split(""), keys=pad.split("");
  for(let i=0; i < text.length; i++){
    const offsetChar = alphabet.getOffsetChar({char: chars[i], offsetChar: keys[i], encrypting: encrypting})
    out.push(offsetChar)
  }
  return out.join("");
}

class OneTimePad{
  constructor(padNumber){
    this.pad = pads[padNumber];
    this.alphabetLength = alphabet.length;
  }
  encrypt(plainText){
    return offsets(plainText,this.pad,true);
  }
  decrypt(cipherText){
    return offsets(cipherText,this.pad,false);
  }
}
module.exports = OneTimePad;
