class LoveBug {
  constructor() {
    this.messages = {
       "!" : "000",
       "G" : "001",
       "O" : "010",
       "F" : "011",
       "M" : "100",
       "🙄" : "101",
       "💩" : "110",
       " " : "111"
    };
    this.chars = this.messages.length;
  }

  encode(message){
    let out = [];
    for(let c of message){
      if(!this.messages[c]) throw new Error("Don't know how to encode that");
      out.push(this.messages[c]);
    }
    return out.join("");
  }

  decode(message){
    let out = [];
    for(let i = 0; i < message.length; i+=3){
      const thisBlock = message.substring(i, i+3);
      const key = Object.keys(this.messages).find(k => this.messages[k] === thisBlock)
      out.push(key);
    }
    return out.join("");
  }


}



module.exports = LoveBug;
