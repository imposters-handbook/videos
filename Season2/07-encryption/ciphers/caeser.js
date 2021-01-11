
const offsetChars = (text, offset=1) => {
  const out = [];
  for(let i=0; i < text.length; i++){
    const offsetIndex = text.charCodeAt(i) + offset;
    out.push(String.fromCharCode(offsetIndex))
  }
  return out.join("");
}

class Caesar {
  constructor(offset=5){
    this.offset=offset;
  }
  encrypt(plainText){
    return offsetChars(plainText, this.offset);
  }
  decrypt(cipherText){
    return offsetChars(cipherText, -this.offset);
  }
}
module.exports = Caesar;