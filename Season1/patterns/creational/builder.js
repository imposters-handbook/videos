//Builder: a more formalized way of creating an object
class ShoppingCart{};
class ShoppingCartBuilder{
  constructor(){
    this.cart = new ShoppingCart();
  };
  setCreationDate(date){
    this.cart.createdAt = date;
  };
  setItems(items){
    this.cart.items = items;
  };
  build(){
    return this.cart;
  };
};
var builder = new ShoppingCartBuilder();
builder.setCreationDate(new Date());
builder.setItems([]);
var cart = builder.build();
console.log(cart);
