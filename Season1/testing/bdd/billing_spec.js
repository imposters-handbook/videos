//BDD: Focus on behavior
describe("Monthly Billing", function(){
  describe("Payment received", function(){
    it("an invoice is created");
    it("subscription status is set to active");
    it("next billing is set to 1 month from now");
    it("a notice is sent to the customer");
  });
  describe("Payment fails", function(){
    it("an invoice is not created");
    it("subscription status is set to retry");
    it("next billing is set to 1 day from now");
    it("a notice is sent to the customer");
  });
});
