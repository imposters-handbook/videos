const UserRepo = {
  get : function(id){
    //look up in the DB or something
    const found = db.findUser(id);
    return new User(found);
  },
  save: function(user){
    //put back to DB
  }
}
class User{
  constructor(args){
    this.first = args.first;
    this.last = args.last;
    this.email = args.email;
  };
  // suspend(){
  //   this.status = "suspended";
  //   UserRepo.save(this);
  // }
};

//reaching through one class to get to another
//to do some kind of operation
//UserRepo.get(1).suspend();

class Membership{
  signInWithLoginPass(login,password){
    //look up in the db... pretend we found them...
    const found = 123;
    return {authenticated: true, id: 123};
  };
  //a better choice to avoid LOD problems
  suspendUser(id){
    var user = UserRepo.get(id);
    user.status = "suspended";
    UserRepo.save(user);
  }
};
