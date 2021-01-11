//Flyweight: small, immutable objects for larger systems
class Table{
  constructor(args){
    return Object.freeze(args);
  };
};
const TableFactory = function(){
  const factory = {};
  //a db call, or do it by hand...
  factory.tables = [
    new Table({name: "customers", pk: "id"}),
    new Table({name: "orders", pk: "id"}),
    new Table({name: "order_items", pk: "id"})
  ];
  factory.getTable = (name) => {
    return factory.tables.find(t => t.name === name);
  };
  return factory;
}();
class PgAdapter{
  constructor(connectionString){
    this.connectionString = connectionString;
    this.name = "Postgres Adapter";
    this.tables = TableFactory;
  };
  //...
}
const adapter = new PgAdapter("test");
console.log(adapter);
