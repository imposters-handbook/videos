//Constructor: creating a simple instance
class ShoppingCart{
  constructor({items: items} = {items: []}){
    //set some values
    //validations and rules for creating an object
    //like: need to have items!
    this.items = items;
  }
}

console.log(new ShoppingCart());
