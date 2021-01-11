//Decorator: an alternative to Bridge that builds functionality
//directly onto an object
const poolable = require("./lib/poolable");

class PgAdapter{
  constructor(connectionString){
    this.connectionString = connectionString;
    this.name = "Postgres Adapter";
  };
  save(item){
    console.log("Saving to PG");
  };
}


const adapter = poolable(new PgAdapter("test"), 10);
console.log(adapter);
