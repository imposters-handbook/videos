class Encoder{

  constructor(){
    this.encoding = {
      "A" : "0100",
      "B" : "100000",
      "C" : "001000",
      "D" : "00101", // not 00110
      "E" : "101",
      "F" : "10010",
      "G" : "010100",
      "H" : "1100",
      "I" : "1101",
      "J" : "010110000",
      "K" : "01011001",
      "L" : "10001",
      "M" : "010101",
      "N" : "0110",
      "O" : "0111",
      "P" : "100001",
      "Q" : "0101100010",
      "R" : "1110",
      "S" : "1111",
      "T" : "0011",
      "U" : "10011",
      "V" : "0101101",
      "W" : "001001",
      "X" : "01011000110",
      "Y" : "010111",
      "Z" : "01011000111",
      " " : "000"
    }
  }
  
  encode(message){
    const words = message.toUpperCase(), out = [];
    for(let char of words){
      const encoding = this.encoding[char];
      //if the character can be encoded great. If not, ignore
      if(encoding) out.push(encoding);
    }
    return out.join("");
  }

  decode(binaryMessage){
    let out = [], codeWord = "";
    for(let bit of binaryMessage){
      codeWord+=bit;
      const key = Object.keys(this.encoding).find(k => this.encoding[k] === codeWord);
      if(key){
        out.push(key);
        codeWord = "";
      }
    }
    return out.join("");
  }

}

module.exports = Encoder;