//Mediator: a class that sits between two other classes
//to decrease coupling and complexity
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
const assert = require("assert");
class SaveCartCommand{
  constructor(cart, adapter){
    assert(cart, "A cart is required");
    this.store = new DocumentStore(adapter);
    this.cart = cart;
  };
  execute(){
    this.store.save("shopping_carts", cart);
  };
};
const cart = new ShoppingCart("Test");
cart.addItem({sku: "socks"});
const cmd = new SaveCartCommand(cart, new PgAdapter());
cmd.execute();
