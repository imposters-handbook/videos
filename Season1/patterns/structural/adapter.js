class PgAdapter{
  constructor(){
    this.name = "Postgres Adapter"
  };
  save(item){
    console.log("Saving to PG");
  };
}
class RedisAdapter{
  constructor(){
    this.name = "Redis Adapter"
  };
  save(item){
    console.log("Saving to Redis");
  };
}
exports.pg = PgAdapter;
exports.redis = RedisAdapter;
