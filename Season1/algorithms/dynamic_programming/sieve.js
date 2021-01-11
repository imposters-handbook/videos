//Sieve of Eratosthenes
const sieve = (n) => {
  var grid = {};
  for (var i = 2; i <= n; i++) {
    grid[i]={marked: false};
  }
  const limit = Math.sqrt(n);
  for (var i = 2; i <= limit; i++) {
    for(var x = i + i; x <= n; x += i){
      grid[x].marked = true;
    }
  }
  var out =[];
  for (var i = 2; i <= n; i++) {
    if(!grid[i].marked) out.push(i);
  }
  return out;
};
console.log(sieve(100));
