//Strategy: formalizing an orchestration of patterns
const assert = require("assert");
class ShoppingCart{
  constructor(key){
    this.key = key;
    this.items = [];
    this.createdAt = new Date();
  };
  addItem(item){
    this.items.push(item);
  };
};
//the strategy
class PgDocumentStorageStrategy{
  constructor(){
    this.store = new DocumentStore(new PgAdapter());
  };
  save(collection, item){
    this.store.save(collection, item);
  };
}
//our mediator
class DocumentStore{
  constructor(adapter){
    this.db = adapter;
  };
  save(table, item){
    const sql = `insert into ${table}(key, body) values($1, $2)`;
    const params = [item.key, JSON.stringify(item)];
    this.db.execute(sql, params);
  };
};
class PgAdapter{
  execute(sql, params){
    console.log("Executing pg query");
    console.log(sql);
  };
}

class SaveCartCommand{
  constructor(cart, storageStrategy){
    assert(cart, "A cart is required");
    this.storageStrategy = storageStrategy;
    this.cart = cart;
  };
  execute(){
    this.storageStrategy.save("shopping_carts", cart);
  };
};
const cart = new ShoppingCart("Test");
cart.addItem({sku: "socks"});
const cmd = new SaveCartCommand(cart, new PgDocumentStorageStrategy());
cmd.execute();
