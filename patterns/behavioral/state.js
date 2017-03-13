//State: formalizing object status into a class
class ShoppingCart{
  constructor(key){
    this.key = key;
    this.state = new NewCartStatus(this);
    this.items = [];
    this.errors = [];
    //...
  };
  addItem(item){
    this.state.addItem(item);
  };
  removeItem(item){
    this.state.removeItem(item);
  }
  setCheckedOut(){
    //transition the state of the object
    //affecting it's behavior
    this.state = new CheckedOutCartStatus(this);
  }
};
class NewCartStatus{
  //cart is new, can do anything to it!
  constructor(cart){
    this.cart = cart;
  };
  addItem(item){
    this.cart.items.push(item);
  };
  removeItem(item){
    this.cart.items.splice(this.items.indexOf(item, 1));
  };
};
class CheckedOutCartStatus{
  //cart is new, can do anything to it!
  constructor(cart){
    this.cart = cart;
  };
  addItem(item){
    this.cart.errors.push("Can't add an item to a cart that's checked out");
  };
  removeItem(item){
    this.cart.errors.push("Can't remove an item to a cart that's checked out");
  };
};
const cart = new ShoppingCart("test");
cart.setCheckedOut();
cart.addItem({sku: "soup"});
console.log(cart);
