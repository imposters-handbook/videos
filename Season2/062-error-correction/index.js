const Encoder = require("./encoder");

const message = `You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me.`

const flipABit = function(message,n){
  const binaryMessage = message.split("");
  console.log("Flipping at",n);
  binaryMessage[n] = binaryMessage[n] === "1" ? "0" : "1";
  return binaryMessage.join("")
}

const encoder = new Encoder();
const encoded = encoder.encode(message);
///ZZZIIIIPPPPP! COSMIC RAY...
let erroredMessage = flipABit(encoded,58);
erroredMessage = flipABit(erroredMessage,72);
const decoded = encoder.decode(erroredMessage);
//output so we an replace
console.log(encoded);
console.log(decoded);






