
const and = (x, y) => x && y ? 1 : 0;
const xor = (x, y) => x !== y ? 1 : 0;
const halfAdder = (x, y) => [and(x, y), xor(x, y)];
const halfNadder = (x, y) => [or(x, y), equiv(x, y)];

const or = (x, y) => x || y ? 1 : 0;
const not = x => x ? 0 : 1;

//secondary

const equiv = (x, y) => x === y ? 1 : 0;
const imp = (x, y) => x === 1 ? y : 1;

//complementatary
const identity = (x, y) => not(not(x));
const nand = (x, y) => not(and(x, y));
const nor = (x, y) => not(or(x, y));

//complementary secondary
const xnor = (x, y) => not(xor(x, y));
const nequiv = (x, y) => not(equiv(x, y));
const nimp = (x, y) => !x ? y : 1;

//obligatory one-liner
const fullAdder = (x, y, c = 0) => c ? halfNadder(x, y) : halfAdder(x, y);

const binaryAddition = function (x, y) {
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
console.log(fullAdder(1,1,1));
console.log(binaryAddition('11011', '1111'));