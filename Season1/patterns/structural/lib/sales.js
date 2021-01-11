const ShoppingCart = require("./cart");
const PgAdapter = require("../bridge");
const SalesRepository = require("./repository");

const repo = new SalesRepository(PgAdapter);
//get a cart by key?
repo.fetchCarts("test");
