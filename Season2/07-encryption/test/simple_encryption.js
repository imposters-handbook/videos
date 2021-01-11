const Spy = require("../lib/spy");
const Caesar = require("../ciphers/caeser");
const BadGuy = require("../lib/bad_guy");
const assert = require("assert");

describe("Caesar ciphers", () => {
  let bob, message, alice=null;
  before(async function(){
    const chosenCipher = new Caesar(1);
    bob = new Spy({cipher: chosenCipher});
    alice = new Spy({cipher: chosenCipher});
    message = "You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me."
    bob.send(message, alice);
  });

  it("will encrypt with a simple 1 char offset", () => {
    assert.strictEqual(bob.sentMessage, "Zpv!xbou!b!upf@!J!dbo!hfu!zpv!b!upf-!cfmjfwf!nf/!Uifsf!bsf!xbzt-!Evef/!Zpv!epo(u!xboob!lopx!bcpvu!ju-!cfmjfwf!nf/");
  });

  it("can easily be decrypted", () => {
    assert.strictEqual(alice.receivedMessage, message);
  });

  it("can easily be cracked", () => {
    const eve = new BadGuy();
    const cracked = eve.crack(bob.sentMessage);
    assert.strictEqual(cracked, message);
  });

});
