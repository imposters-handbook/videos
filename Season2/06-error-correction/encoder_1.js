class Encoder{
  // constructor(){
  //   this.encoding = {
  //     "A" : "01000000000",
  //     "B" : "10000000000",
  //     "C" : "00100000000",
  //     "D" : "00101000000",
  //     "E" : "10100000000",
  //     "F" : "10010000000",
  //     "G" : "01010000000",
  //     "H" : "11000000000",
  //     "I" : "11010000000",
  //     "J" : "01011000000",
  //     "K" : "01011001000",
  //     "L" : "10001000000",
  //     "M" : "01010100000",
  //     "N" : "01100000000",
  //     "O" : "01110000000",
  //     "P" : "10000100000",
  //     "Q" : "01011000100",
  //     "R" : "11100000000",
  //     "S" : "11110000000",
  //     "T" : "00110000000",
  //     "U" : "10011000000",
  //     "V" : "01011010000",
  //     "W" : "00100100000",
  //     "X" : "01011000110",
  //     "Y" : "01011100000",
  //     "Z" : "01011000111",
  //     " " : "00000000000"
  //   }
  // }
  constructor(){
    this.encoding = {
      "A" : "0100",
      "B" : "100000",
      "C" : "001000",
      "D" : "00110",
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
    //loop the characters in the message
    //we'll assume for now that they won't enter anything but alpha numeric with a space for separation
    //also ... uppercase to reduce pain
    const words = message.toUpperCase(), out = [];

    // //pad the encoding so it's 11 total chars
    // const keys = Object.keys(this.encoding);
    // for(let key of keys){
    //   this.encoding[key] = this.encoding[key].padEnd(11, "0");

    // }

    for(let word of words){
      for(let char of word){
        const encoding = this.encoding[char];
        //if the character can be encoded great. If not, ignore
        if(encoding) out.push(encoding);
      }
    }
    return out.join("");
  }
  getAlpha(binary){
    return Object.keys(this.encoding).find(k => this.encoding[k] === binary)
  }
  decode(binaryMessage){
    
    let out = [], codeWord = "", errors = [];

    for(let i = 0; i < binaryMessage.length; i+=11){
      codeWord = binaryMessage.substring(i, i + 11);
      const key = this.getAlpha(codeWord);
      if(key){
        out.push(key);
        codeWord = "";
      }else{
        //this is an error!
        //errors.push(key);
        const fix = this.simpleHammingErrorCorrector(codeWord);
        out.push(fix.word);
      }
    }

    return out.join("");
  }

  simpleHammingErrorCorrector(binaryMessage){

    const codeWords = Object.values(this.encoding);
    let bestCandidate = {}, bestDistance = Number.POSITIVE_INFINITY;

    for(let codeWord of codeWords){
      let thisDistance = 0;;
      
      //we're scanning each word for a match
      for(let i = 0; i < codeWord.length; i++){
        if(codeWord[i] !== binaryMessage[i]) {
          thisDistance+=1;
        }
      }

      if(thisDistance < bestDistance){
        bestDistance = thisDistance;
        bestCandidate = {word: this.getAlpha(codeWord), binary: codeWord, distance: bestDistance}
      }
    }
    return bestCandidate;
  }
  // decode(binaryMessage){
    
  //   let out = [], codeWord = "", errors = [];

  //   for(let bit of binaryMessage){
  //     codeWord+=bit;
  //     const key = Object.keys(this.encoding).find(k => this.encoding[k] === codeWord)
  //     if(key){
  //       out.push(key);
  //       codeWord = "";
  //     }
  //   }

  //   return out.join("");
  // }

}

module.exports = Encoder;