class DiffieHellman{
  constructor({generator, secret, modulus}={}){
    this.generator = generator;
    this.secret = secret;
    this.modulus = modulus;
    this.publicKey = Math.pow(this.generator,this.secret) % this.modulus;
  }
  encryptionKey(receiverPublicKey){
    return Math.pow(receiverPublicKey, this.secret) % this.modulus;
  }
}
module.exports = DiffieHellman;

