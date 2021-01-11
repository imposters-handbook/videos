//Method Chaining: also known as "fluent interface",
//it can make your code a bit more readable
class ShoppingCart{};
class ShoppingCartBuilder{
  constructor(){
    this.cart = new ShoppingCart();
  };
  setCreationDate(date){
    this.cart.createdAt = date;
    return this;
  };
  setItems(items){
    this.cart.items = items;
    return this;
  };
  build(){
    return this.cart;
  };
};
var cart = new ShoppingCartBuilder()
                  .setCreationDate(new Date())
                  .setItems([])
                  .build();
console.log(cart);
