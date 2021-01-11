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

module.exports = (adapter, poolSize = 10) => {
  adapter.pool = new ConnectionPool(adapter.connectionString, poolSize);
  return adapter;
}
