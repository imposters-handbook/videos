const Hamming = require("./hamming");
class Encoder{

  constructor(){

    this.encoding = {
      "A" : "01000000000",
      "B" : "10000000000",
      "C" : "00100000000",
      "D" : "00101000000",
      "E" : "10100000000",
      "F" : "10010000000",
      "G" : "01010000000",
      "H" : "11000000000",
      "I" : "11010000000",
      "J" : "01011000000",
      "K" : "01011001000",
      "L" : "10001000000",
      "M" : "01010100000",
      "N" : "01100000000",
      "O" : "01110000000",
      "P" : "10000100000",
      "Q" : "01011000100",
      "R" : "11100000000",
      "S" : "11110000000",
      "T" : "00110000000",
      "U" : "10011000000",
      "V" : "01011010000",
      "W" : "00100100000",
      "X" : "01011000110",
      "Y" : "01011100000",
      "Z" : "01011000111",
      " " : "00000000000"
    }
  }
  encode(message){
    //loop the characters in the message
    //we'll assume for now that they won't enter anything but alpha numeric with a space for separation
    //also ... uppercase to reduce pain
    const words = message.toUpperCase(), out = [];

    for(let word of words){
      for(let char of word){
        const encoding = this.encoding[char];
        //if the character can be encoded great. If not, ignore
        if(encoding) out.push(encoding);
      }
    }
    const rawMessage = out.join("");
    return Hamming.calcParity(rawMessage);
    
  }
  getAlpha(binary){
    return Object.keys(this.encoding).find(k => this.encoding[k] === binary)
  }

  decode(received){
    const corrected = Hamming.correctAnyErrors(received)
    const cleaned = Hamming.removeParityBits(corrected);
    let out = [], codeWord = "";
    const pad = this.encoding.A.length;
    for(let i = 0; i < cleaned.length; i+=pad){
      codeWord = cleaned.substring(i, i + pad);
      const key = this.getAlpha(codeWord);
      out.push(key);
      codeWord = "";
    }
    return out.join("");
  }

}

module.exports = Encoder;