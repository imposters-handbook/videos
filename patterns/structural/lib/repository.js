const ShoppingCart = require("./cart");
class SalesRepository{
  constructor(adapter){
    this.db = adapter;
  };
  saveCart(cart){
    //db interaction...
    this.db.save(cart);
    console.log(`Cart ${cart.key} saved to ${this.db.name}`);
  };
  getCart(key){
    return this.db.cart.get(key);
  };
  fetchCarts(){
    return this.db.cart.fetch();
  }
}

module.exports = SalesRepository;
