class Encoding {
  constructor(){
    //default props
    this.dictionary = {};
    this.codeWords = {};
  }
  
  characterSet(){
    return Object.values(this.codeWords);
  }
  
  totalCharacters(){
    let total = 0;
    //I know, this looks weird
    //it has to do with the way emojis have a string length of two
    //but the iterator only iterates them once so... yeah
    for(let word of this.dictionary){
      for(let char of word) total+=1;
    }
    return total;
  }
  characterCounts(){
    let result = {};
    for(let word of this.dictionary){
      for (let character of word) {
        if (result[character]) {
          result[character]++;
        } else {
          result[character] = 1;
        }
      }
    }
    return result;
  }

  kraftMacmillan(){

    const bits = Object.keys(this.codeWords);
    return bits.reduce((total,b) => {
      const level = b.length
      //console.log("Level: ", level);
      const fraction =  1.00 / Math.pow(2,level);
      //console.log("Fraction: ", console.log(fraction));
      //console.log(fraction);
      return total + fraction;
    },0)
  }

  levels(){
    let result = {};
    const keys = Object.keys(this.codeWords);
    for(let key of keys){
      const level = key.length;
      result[this.codeWords[key]] = level;
    }
    return result;
  }
}

module.exports = Encoding;