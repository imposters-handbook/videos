//Facade: Hides implementation details and makes choices for calling code
class PgAdapter{
  constructor(connectionString){
    this.connectionString = connectionString;
    this.name = "Postgres Adapter"
  };
  save(item){
    console.log("Saving to PG");
  };
}
class RedisAdapter{
  constructor(connectionString){
    this.connectionString = connectionString;
    this.name = "Redis Adapter"
  };
  save(item){
    console.log("Saving to Redis");
  };
}
//this can be a function or a class or whatever...
const AdapterFacade = function(connectionString) {
  if(connectionString.startsWith("postgres")){
    return new PgAdapter(connectionString);
  }else if(connectionString.startsWith("redis")){
    return new RedisAdapter(connectionString);
  }else{
    throw new Exception("That connection isn't supported");
  }
};

//export as a module to hide the implementation
module.exports = AdapterFacade;
