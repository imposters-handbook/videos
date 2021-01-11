const assert = require("assert");
class ShoppingCart{
  constructor(key){
    assert(key, "A key is required");
    this.key = key;
    this.items = [];
    this.createdAt = new Date();
  };
  addItem(item){
    this.items.push(item);
    return this;
  }
}
module.exports = ShoppingCart;
