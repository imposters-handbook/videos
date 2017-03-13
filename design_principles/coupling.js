//example of two tightly-coupled classes
//User can't exist without Membership
//Membership can't exist without User
//changes to one mean changes to the other
class User{
  constructor(args){
    this.first = args.first;
    this.last = args.last;
    this.email = args.email;
  };
  signIn(login,password){
    //high coupling!!!
    return Membership.signInWithLoginPass(login,password);
  }
};

class Membership{
  signInWithLoginPass(login,password){
    //look up in the db... pretend we found them...
    const found = {first: "Joe", last: "Bob", email: "test@test.com"};
    return new User(found);
  }
};
