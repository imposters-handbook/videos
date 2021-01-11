
class Alphabet {
  constructor(){
    this.chars = [
      "A", "B", "C", "D",
      "E", "F", "G", "H",
      "I", "J", "K", "L",
      "M", "N", "O", "P",
      "Q", "R", "S", "T",
      "U", "V", "W", "X",
      "Y", "Z", " ", "?", "!"
    ];
  }
  getOffsetChar({char, offsetChar, encrypting=true}){
    const charPosition = this.chars.indexOf(char);
    const keyPosition = this.chars.indexOf(offsetChar);
    const offsetPosition = encrypting ? (charPosition + keyPosition) : (charPosition - keyPosition);
    let idx = (offsetPosition) % this.chars.length;
    if(offsetPosition < 0 ) idx = this.chars.length - -idx;
    return this.chars[idx]
  }

}
module.exports = new Alphabet();