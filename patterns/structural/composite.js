//Composite: parent/child composition providing single-object functionality
//Connection and ConnectionPool are composed to provide a single bit of functionality
class Connection{
  constructor(connectionString){
    this.connectionString = connectionString;
    this.close();
  };
  open(){
    this.checkedOut = true;
    this.status = "open";
  };
  close(){
    this.checkedOut = false;
    this.status = "closed";
  }
};
class ConnectionPool{
  constructor(connectionString, poolSize = 10){
    this.pool = [];
    for (var i = 0; i < 10; i++) {
      const conn = new Connection(connectionString);
      this.pool.push(conn);
    }
  };
  checkout(){
    const found = this.pool.find(c => c.checkedOut === false);
    if(found){
      found.open();
      return found;
    }else{
      throw new Exception("No available connections");
    }
  };
  checkin(conn){
    conn.close();
  };
  drain(){
    for(var conn of this.pool){
      conn.close();
    }
  };
};
class PgAdapter{
  constructor(connectionString){
    this.pool = new ConnectionPool(connectionString, 10);
    this.name = "Postgres Adapter";
  };
  save(item){
    //need to really send to the DB...
    console.log("Saving to PG");
  };
}

const adapter = new PgAdapter("test");
console.log(adapter.pool);
const conn = adapter.pool.checkout();
console.log(conn);
