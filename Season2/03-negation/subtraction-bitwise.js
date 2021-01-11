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

//there are other ways to do this using bitshifting and whatnot
//this, however, is a nice reuse of our existing code to
//drive home the point of ones and twos complement
const subtract = function(x,y){
  if(y === 0) return x;
  const ones = ~y; //(~y + 1) - x;
  const twos = add(ones,1);
  return add(x,twos)
}

console.log(subtract(27,15))