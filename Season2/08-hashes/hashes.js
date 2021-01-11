const crypto = require("crypto");

const hash = crypto.createHash("sha256")
.update("hi")
.digest("latin1");
console.log(hash);

//008c70392e3abfbd0fa47bbc2ed96aa99bd49e159727fcba0f2e6abeb3a9d601


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("Password123", salt);



const hashPassword = function(pw){
  return new Promise(function(resolve, reject){
    crypto.scrypt(pw,"nubbins",32, {cost: 2**14}, function(err, buffer){
      if(err) reject(err);
      else resolve(buffer.toString("hex"))
    });
  })
}
//4396dac13f570e079b82fb27bfe2b734ec693ad7817ad6f618fc6d8f738bc02d

const go = async function(){
  const hash = await hashPassword("Password123");
  return hash;
}

go().then(console.log)


//4d1dcbdb6ea1057544181950b25ab8ddfd3d8045b4a1407c5d4555da2cf2798d