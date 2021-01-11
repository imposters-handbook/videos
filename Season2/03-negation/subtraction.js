const and = (x, y) => x && y ? 1 : 0;
const xor = (x, y) => x !== y ? 1 : 0;
const halfAdder = (x, y) => [and(x, y), xor(x, y)];
const halfNadder = (x, y) => [or(x, y), equiv(x, y)];
const or = (x, y) => x || y ? 1 : 0;
const not = x => x ? 0 : 1;
const equiv = (x, y) => x === y ? 1 : 0;


const fullAdder = (x, y, c = 0) => c ? halfNadder(x, y) : halfAdder(x, y);

const addition = function (x, y) {
  //our output, which is a string and the carry bit
  let sum = "", c = 0;

  //handle length differences by padding the start with 0s
  if (x.length > y.length) y = y.padStart(x.length, "0");
  if (y.length > x.length) x = x.padStart(y.length, "0");

  //loop from right to left
  for (let i = x.length - 1; i >= 0; i--) {
    //get the current numbers for fullAdder
    const a = parseInt(x[i]), b = parseInt(y[i]);
    const [left, right] = fullAdder(a, b, c);
    //set the carry bit for next iteration
    c = left;
    //append the rightmost to our sum
    sum = right + sum;
  }
  //tack on a carry bit on the left end if needed
  return c ? c + sum : sum;
}

const onesComplement = function(num){
  let inversion = [];
  for(let digit of num) {
    inversion.push(not(digit))
  }
 return inversion.join("")
}

const twosComplement = function(num){
  const ones = onesComplement(num)
  return addition(ones, "1");
}

const simpleSubtraction = function(x,y){
  //the idea here is that we're doing x - y
  //which is the same as x + -y
  const twos = twosComplement(y);
  const result =  addition(x,twos);

  //if the left-most is 1 toss it, we don't carry
  return result.substring(1, result.length)
}
//27 - 15
console.log(simpleSubtraction('11011', '01111')); //12
