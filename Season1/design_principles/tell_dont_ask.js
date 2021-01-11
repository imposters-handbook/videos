//this class is set up so that we have to ask
//far too many questions, knowing too much about
//the internal workings...
class GroovyQuery{
  isCommandValid(){
    //do something
  };
  isConnectionAvailable(){
    //check conn pool to see if
    //one is free
  };
  execute(sql){
    //run it
  };
}
const query = new Query();
//Bleh! We're asking too many questions...
if(query.isCommandValid("select * from") && query.isConnectionAvailable()){
  query.execute();
};

//Tell it what to do! Have it tell YOU when things
//aren't the way they should be...
class GroovyQuery2{
  execute(cmd){
    //check if it's valid
    isValid = (cmd) =>{
      //...
    };
    //see if there's a connection
    haveConnection = () => {
      //...
    }
    if(isValid(cmd) && haveConnection()){
      //run
    }else{
      //return an error
    }
  }
}
