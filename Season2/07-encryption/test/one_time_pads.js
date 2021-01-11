const Spy = require("../lib/spy");
const OneTimePad = require("../ciphers/onetimepad");
const assert = require("assert");

describe("One time pads", () => {
  before(function(){
    const chosenCipher = new OneTimePad(1);
    bob = new Spy({cipher: chosenCipher});
    alice = new Spy({cipher: chosenCipher});
    message = "YOU WANT A TOE?";
    bob.send(message, alice);
  });
  it("will encrypt", () => {
    assert.strictEqual("ZVKMLPZIIZGYCUV", bob.sentMessage)
    
  });
  it("will decrypt", () => {
    assert.strictEqual(message, alice.receivedMessage)
  });
});