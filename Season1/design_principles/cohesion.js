//A nicely cohesive set of classes and objects
//They exist independently, but have a "cohesive"
//notion of what they do. A User describes a User,
//Membership does membership stuff, etc.
const UserRepo = {
  get : function(id){
    //look up in the DB or something
    const found = db.findUser(id);
    return new User(found);
  }
}
class User{
  constructor(args){
    this.first = args.first;
    this.last = args.last;
    this.email = args.email;
  };
};
class Membership{
  signInWithLoginPass(login,password){
    //look up in the db... pretend we found them...
    const found = 123;
    return {authenticated: true, id: 123};
  }
};
