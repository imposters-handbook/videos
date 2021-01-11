//resources
//https://www.cs.drexel.edu/~jpopyack/IntroCS/HW/RSAWorksheet.html
//https://www.cryptool.org/en/cto/highlights/rsa-step-by-step

//let's find two relatively prime numbers, e and d, such that
//e % d mod r === 1
//this is the cornerstone of RSA
var findEandD = function(r) {
  //These are common candidates for e, which can be autoset
  //and typically 65537 is used, but we'll
  //start small for speed
  const possibleEs = [3n,5n,17n,257n,65537n]
  //now, loop over the possible e's so we can find our d
  for(let e of possibleEs){
    //we want to find a coprime for e, so let's factor it
    //up to r and see if e % r is 1
    //if it is, we found our coprime
    for (let d = 1n; d < r; d++) {
      const candidate = e * d;
      if (candidate % r == 1n) return {e: e, d: d};
    }
  }
  assert.fail("We shouldn't reach this point")
}

const p = 499n;
const q = 491n;
assert.notStrictEqual(p,q, "p and q must be different primes");

//our public key, N
const N = p * q;

//Euler's totient for deriving r
//r = phi(n) = (p-1) * (q-1)
const r = (p-1n) * (q-1n);

//now we can calculate e and d for our private key
const {e,d} = findEandD(r);

//our message
const M = 25n;

console.log("e",e);
console.log("d",d);
console.log("N",N);
console.log("r",r);

console.log("M", M);

//the RSA algorithm
const encrypted = M**e % N;
const decrypted = encrypted**d % N;

console.log("Encrypted",encrypted);
console.log("Decrypted",decrypted);