const dictionary = require("../data/dictionary.json");
const Caesar = require("../ciphers/caeser");

class BadGuy {
  constructor(){
    this.cipher = new Caesar();
  }
  crack(encryptedMessage){
    let wordScore = 0, offset=1;
    while (offset < 10000000) { //keep our loop from going too long
      this.cipher.offset = offset;
      const candidate = this.cipher.decrypt(encryptedMessage);
      const possibleWords = candidate.split(" ");
      if(possibleWords.length > 0){
        for(let word of possibleWords){
          if(dictionary[word.toLowerCase()] > -1){
            wordScore+=1;
            if(wordScore > 2) return candidate;
          }
        }
      }
      offset+=1;
    }
    return "I'm STUMPED"
  }
}

module.exports = BadGuy;