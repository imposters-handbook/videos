//Chain of Responsibility: wiring together a process
//note: this is *not a current pattern that is used widely*
//variations of this include event handling, piping through a process
//and event source replay.
class ShoppingCart{
  constructor(){
    this.items = [];
    //checkingOut
    //checkedOut
    //invalid
    this.status = "pending";

    //no items
    this.isValid = false;
    this.errors = [];
  };
  validate(){
    const itemValidator = new ItemCountValidator();
    const checkoutValidator = new CanCheckoutValidator();
    //orchestrate the validation chain
    itemValidator.setSuccessor(checkoutValidator);
    //start it off
    itemValidator.validate(this);
  }
};
class ShoppingCartValidator{
  setSuccessor(nextValidator){
    this.nextValidator = nextValidator;
  };
  validate(cart){
    console.log("Override this please");
  };
  handleNext(cart){
    if(cart.isValid && this.nextValidator){
      this.nextValidator.validate(cart);
    }
  };
};
class ItemCountValidator extends ShoppingCartValidator{
  validate(cart){
    cart.isValid = false;
    if(cart.items.length > 0) cart.isValid = true;
    else cart.errors.push("There are no items in the cart");
    this.handleNext(cart);
  };
};

class CanCheckoutValidator extends ShoppingCartValidator{
  validate(cart){
    cart.isValid = false;
    if(cart.status !== "checkedOut") cart.isValid = true;
    else cart.errors.push("This cart is already checked out");
    this.handleNext(cart);
  };
};

const cart = new ShoppingCart();
cart.items.push({sku: "socks"});
cart.status = "checkedOut";
cart.validate();
console.log(cart);
