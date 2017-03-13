//Factory: a formalized way to construct an object
class ShoppingCart{}
ShoppingCart.fromDefaults = () => {
  var cart = new ShoppingCart();
  cart.createdAt = new Date();
  cart.items = [];
  return cart;
}
ShoppingCart.withItems = (items = []) => {
  var cart = new ShoppingCart();
  cart.createdAt = new Date();
  cart.items = items;
  return cart;
}
console.log(ShoppingCart.withItems([{sku: "SOCKS"}]));
