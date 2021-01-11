const crypto = require("crypto");

const createHash = (block) => {
  //need to pass a string to our 
  const hashValue = JSON.stringify(block)
  return crypto.createHash("sha256")
  .update(hashValue)
  .digest("base64");
}

const mine = (block, difficulty = 2) => {
  let found = false, start = new Date().getTime();
  //we're looking for a string of 0s so let's create the pattern
  //I could use Regex but I'm not that good
  const lookingFor = "0".padStart(difficulty, "0");
  console.log("Looking for a hash starting with", lookingFor);
  const duration = new Date().getTime() - start;

  while(!found){
    const possibleHash = createHash(block);  
    //does the hash start with zeroes?
    found = possibleHash.substring(0, difficulty) === lookingFor;
    if(found){
      block.hashKey = possibleHash;
      return block;
    }
    block.nonce += 1;
    //10 second kill switch
    if(duration > 10000) return "Didn't find it under 10s"
  }
}

const block = {
  transactions: [
    {from: "me", to: "you", amount: 10.00},
    {from: "you", to: "me", amount: 5.00}
  ],
  timestamp: 1609702546153, //if this changes the hash changes
  nonce: 0,
  previousKey: "00RSDThMVcQAvoocD3klO/6pjJ4a8pRbZ3ykk3XXhXE="
}
//let's see how long this takes
const start = new Date().getTime();
//let's do it!
const result = mine(block, 4);
const duration = new Date().getTime() - start;
console.log(`That took duration ${duration}ms`);
console.log(result);

