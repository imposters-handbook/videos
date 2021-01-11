const crypto = require("crypto");
const fs = require("fs");

const data = fs.readFileSync("./message.txt");

const checksum = function(data){
  return crypto.createHash("md5").update(data, "utf8").digest("hex")
}

console.log(checksum(data));

//77bc97770feefd2f20600bb3d34a455b