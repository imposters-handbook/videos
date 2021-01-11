
const getParityBitPositions = (message) => {
  const bits=[];
  for(let i=1; i <= message.length; i = i * 2) {
    bits.push(i);
  }
  return bits;
}

const addParityPlaceholder = function(message){
  const digits= message.split('');
  const bits = getParityBitPositions(message)
  //add parity bits "P" to positions that are powers of two as parity bits. (positions 1, 2, 4, 8, 16, 32, 64, etc.)
  for(let b of bits){
    //...
    digits.splice(b-1, 0, "P")
  }
  return digits.join("");
}


//this is O(n*m) which isn't very good, but it's not the worst thing I guess
//not sure if we can get around it but maybe if it was huge and stored somewhere
const parityMatrix = function(message){
  const length = message.length;
  const out={}, bits = getParityBitPositions(message)

  for(let b of bits){
    const intBit = parseInt(b);
    let checked=0;skipped=0;

    //we'll return a hash with an array value of data placeholders
    out[intBit]=[];
    
    for(let x = intBit; x <= length; x++){
      if(checked < intBit) {
        out[intBit].push(x)
        checked+=1;
      }else{
        skipped+=1;
      }
  
      if(skipped===checked){
        skipped = 0;
        checked = 0;
      }
    }
  }
  return out;
}


const calcParity = (message) => {
  const withPlaceholders = addParityPlaceholder(message);
  const bits = getParityBitPositions(withPlaceholders);
  const matrix = parityMatrix(withPlaceholders)
  const binaryMessage = withPlaceholders.split('');

  for(let bitIndex of bits){
    let thisCalc=0;
    for(let idx of matrix[bitIndex]){
      if(binaryMessage[idx-1] === "1") thisCalc+=1;
    }
    if(thisCalc % 2 > 0) console.log(`Setting B${bitIndex} to 1 because ${thisCalc}`)
    else console.log(`Leaving B${bitIndex} as 0 because ${thisCalc}`);
    binaryMessage[bitIndex - 1] = thisCalc % 2 > 0 ?  "1" : "0"
  }
  return binaryMessage.join("")
}

const correctAnyErrors = (received) => {
  
  const matrix = parityMatrix(received)
  const binaryMessage = received.split('');
  const parityIndexes = Object.keys(matrix);

  let errorPosition =0;
  for(let idx of parityIndexes){
    
    const thisSegment = matrix[idx];

    let calc = 0;
    for(let bit of thisSegment){
      //console.log(binaryMessage[bit]);
      const bitIdx = parseInt(bit) - 1;
      calc += parseInt(binaryMessage[bitIdx]);
    }
    if(calc % 2 !== 0) console.log("Found error with Parity bit",idx);
    if(calc % 2 !== 0) errorPosition += parseInt(idx);
    
  }
  if(errorPosition > 0){
    //flip the error using the array of chars
    console.log("Correcting error at position",errorPosition-1);
    binaryMessage[errorPosition-1] = binaryMessage[errorPosition-1] === "1" ? "0" : "1";
  }
  return binaryMessage.join("");
}

const randomlyFlipAbit = function(message,n){
  const binaryMessage = message.split("");
  console.log("Flipping at",n);
  binaryMessage[n] = binaryMessage[n] === "1" ? "0" : "1";
  return binaryMessage.join("")
}

const message = `010111000000111000000010011000000000000000000010010000001000000000011000000000011000000000000000000010000000000000000000000110000000011100000001010000000000000000000110100000000000000000000100000000010000000000110000000000000000000010100000001010000000000110000000000000000000101110000001110000000100110000000000000000001000000000000000000000011000000001110000000101000000000000000000010000000000101000000001000100000011010000000101000000000101101000010100000000000000000000101010000010100000000000000000000011000000011000000000101000000001110000000010100000000000000000000100000000011100000000101000000000000000000000100100000010000000000101110000011110000000000000000000010100000010011000000001010000001010000000000000000000010111000000111000000010011000000000000000000010100000001110000000011000000000011000000000000000000001001000000100000000001100000000011000000000100000000000000000000010110010000110000000001110000000001001000000000000000001000000000100000000000111000000010011000000001100000000000000000011010000000001100000000000000000010000000000101000000001000100000011010000000101000000000101101000010100000000000000000000101010000010100000000`
//const message = `010111011110011000001001010001100011000010000000110111101000110100000100001000110000010100101001100001011101111001100001000000011011110100010000010110001110110101011011010000101011010000011110010111101010000100111010100000100101000101111111000001011001100101101000010111011110011000001010111011000110000010010100011001100100000010110010110011100100100001001000000111100110011000110100110001000001011000111011010101101101000010101101`
//console.log(message);
const paritied = calcParity(message);
//console.log(paritied);

// const withBitPlaceholders = addParityPlaceholder(message);
// const messageWithParity = calcParity(withBitPlaceholders);
const paritiedWithErrors = randomlyFlipAbit(paritied,58);

// console.log(messageWithParity);
// console.log(paritiedWithErrors);

const fixed = correctAnyErrors(paritiedWithErrors);
// console.log(fixed);
const areEqual = paritied === fixed;
console.log("Are they equal?",areEqual);
//whatAreMyParityBits(messageWithParity)
//console.log(messageWithParity);
//console.log(res);





