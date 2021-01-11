//a fine interview answer
const add = function (x, y) {
  //Iterate till there is no carry
  let should_carry = null;
  while(should_carry !== 0){
    should_carry = x & y;
    x = x ^ y;
    y = should_carry << 1
  }
  return x;
}

//One-liner because... they're fun
const addX = (x, y) => y === 0 ? x : add((x ^ y), (x & y) << 1);

console.log(add(27,15))