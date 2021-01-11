//Fibonacci with Dynamic Programming
const calculateFibAt = (n) =>{
  var memoTable = [0,1];
  for(var i=2;i<=n;i++){
    memoTable.push(memoTable[i-2] + memoTable[i-1])
  }
  return memoTable;
};
console.log(calculateFibAt(1000));


//slow, recursive way
const fibSlow = n => n < 2 ? n : fibSlow(n-2) + fibSlow(n-1);

console.log(fibSlow(10));
