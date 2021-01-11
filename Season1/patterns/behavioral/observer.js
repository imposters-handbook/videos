//Observer: event-based programming
class Observable{
  constructor(){
    this.listeners = [];
  }
  listen(eventName, fn){
    this.listeners.push({eventName: eventName, fn: fn});
  };
  notify(eventName, data){
    //get the listeners for a given event
    const listeners = this.listeners.filter(x => x.eventName === eventName);
    for(var listener of listeners) listener.fn(data);
  };
}
class ShoppingCart extends Observable{
  constructor(key){
    super();
    this.key = key;
    this.items = [];
    this.createdAt = new Date();
  };

  addItem(item){
    this.items.push(item);
    this.notify("item-added",this);
  };
};
//wire the ShoppingCart for events
const cart = new ShoppingCart("test");
cart.listen("item-added", cart => {
  console.log(cart);
});
cart.addItem({sku: "BOOTS"});
