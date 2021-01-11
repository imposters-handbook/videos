
class Spy{
  constructor({cipher=null}){
    this.cipher = cipher;    
    this.receivedMessage=null;
    this.sentMessage=null;
  }
  send(message, to){
    const encryptedMessage = this.cipher.encrypt(message);
    this.sentMessage = encryptedMessage;
    to.receive(encryptedMessage);
  }
  receive(encryptedMessage){
    const decryptedMessage = this.cipher.decrypt(encryptedMessage);
    this.receivedMessage = decryptedMessage;
  }
}

module.exports = Spy;