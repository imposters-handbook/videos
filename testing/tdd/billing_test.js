//TDD: Subscription billing
//Key Concepts: YAGNI, DRY, FUN!!!

describe("Monthly Billing", function(){
  var repo, billingSystem;
  before(function(){
    repo = new CustomerRepo();
    billingSystem = new BillingThingy(repo);
  });
  describe("Customers with subs due", function(){
    before(function(){
      repo.customers = [{name: "Steve",subscriptions: [{plan:"gold"}]}];
    });
    //happy path
    it("are charged", function(){
      const result = billingSystem.processMonth(2017, 2);
      assert.equal(result,1);
    });
  });
  describe("Customers without subs due", function(){
    before(function(){
      repo.customers = [];
    });
    //sad path
    it("are not charged", function(){
      const result = billingSystem.processMonth(2017, 2);
      assert.equal(result,0);
    });
  });
  describe("A Customer with two subs", function(){
    before(function(){
      repo.customers = [{name: "Steve", subscriptions: [{plan:"gold"}, {plan: "silver"}]}];
    });
    //sad path
    it("is billed twice", function(){
      const result = billingSystem.processMonth(2017, 2);
      assert.equal(result,2);
    });
    it("but only one customer is charged", function(){
      assert.equal(repo.customers.length,1);
    });
  });
});
class Customer{
  constructor(){
    this.subscriptions = [];
  }
};
class CustomerRepo{
  constructor(){
    this.customers = [];
  }
};
class BillingThingy{
  constructor(repo){
    this.customerRepo = repo;
  };
  processMonth(year, month){
    const customers = this.customerRepo.customers;
    var result = 0;
    for(var customer of customers){
      result+=customer.subscriptions.length;
    }
    return result;
  }
};
