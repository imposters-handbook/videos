//Bridge: abstracting the interface
const CartRetrieval = (db) => {
  return {
    get: (id) => console.log(`Getting from ${db.name}`),
    fetch: (id) => console.log(`Fetching from ${db.name}`)
  }
}
class PgAdapter{
  constructor(){
    this.name = "Postgres Adapter";
    this.cart = CartRetrieval(this);
  };
  save(item){
    console.log("Saving to PG");
  };
}
module.exports = new PgAdapter();
