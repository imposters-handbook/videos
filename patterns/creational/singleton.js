//Singleton: returns only a single instance of an object
//is almost always a bad idea
const ShoppingCart = require("./cart");
const OtherCart = require("./Cart");

//BAHAHAHAHAHAHA SUBVERSION!

ShoppingCart.items.push({sku: "SOCKS"})
OtherCart.items.push({sku: "More SOCKS"})

console.log(OtherCart.items);
console.log(ShoppingCart.items);
