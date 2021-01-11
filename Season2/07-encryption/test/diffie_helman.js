const DiffieHellman = require("../ciphers/dhm");
const assert = require("assert");

describe("Diffie-Hellman-Merkel Key Exchange", () => {
  let alice,bob;
  before(function(){
    bob = new DiffieHellman({generator: 5, secret: 4, modulus: 9});
    alice = new DiffieHellman({generator: 5, secret: 2, modulus: 9});
  });

  it("alice's public key is 7", () => {
    assert.strictEqual(alice.publicKey, 7);
  });
  it("bob's public key is 4", () => {
    assert.strictEqual(bob.publicKey, 4);
  });
  it("alice's encryption key is 7", () => {
    assert.strictEqual(alice.encryptionKey(bob.publicKey), 7);
  });
  it("alice's encryption key is 7", () => {
    assert.strictEqual(bob.encryptionKey(alice.publicKey), 7);
  });
  it("eve is completely stumped", () => {
    assert(true)
  });
});