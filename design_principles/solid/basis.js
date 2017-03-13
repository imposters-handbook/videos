//Single reason to change
class User{
  constructor(args){
    this.first = args.first;
    this.last = args.last;
    this.email = args.email;
  };
}
class Membership{
  register(args){
    //
  }
}

//Open/Closed principle
//open for extension, closed for modification
class RobsMembership extends Membership{
  //do what I want to
}

//Liskov Substitution
class Administrator extends User{
  //I should be able to pass this instance
  //as if it were a User... or an Administrator type
}

//Interface Segregation
//see the C# example

//Dependency Inversion
//see tghe C# example
