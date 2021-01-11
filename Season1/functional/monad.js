//Functors and Monads
//Using functions to help orchestrate... functions...
//a monad is a functor, with the addition
//of some logic to help you deal with problematic values
//like null or undefined
class Maybe{
  constructor(val){
    this.value = val;
  }
  isNothing(){
    return this.value === null || this.value === undefined;
  }
  map(fn){
    return this.isNothing() ? new Maybe(null) : new Maybe(fn(this.value));
  }
  val(){
    return this.isNothing() ? "" : this.value;
  }
}
Maybe.of = val => new Maybe(val);

const selectQuery = table => (where, params=[]) => order => limit => exec => {
  const whereClause = Maybe.of(where).map(w => `where ${w}`).val();
  const orderClause = Maybe.of(order).map(o => `order by ${o}`).val();
  const limitClause = Maybe.of(limit).map(l => `limit ${l}`).val();

  if(params.length > 0) params = [params];
  //const sql = `select * from ${table}${whereClause}${orderClause}${limitClause}`;

  const sql = Maybe.of(`select * from ${table}`)
                    .map(sql => `${sql} ${whereClause}`)
                    .map(sql => `${sql} ${orderClause}`)
                    .map(sql => `${sql} ${limitClause}`)
                    .val();

  const query =  {sql: sql, params: params};
  if(exec){
    db.many(sql, params).then(res => exec(res)).catch(err => console.log(err))
  }
  else return query;
};
const albumQuery = selectQuery("album");
const albumSearch = title => albumQuery("title LIKE $1", `%${title}%`)()();
const rockAlbums = albumSearch("Rock");
console.log(rockAlbums());




















// class Maybe{
//   constructor(val){
//     this.__value = val;
//   }
//   isNothing(){
//     return (this.__value === null || this.__value === undefined);
//   };
//   map(fn){
//     return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.__value));
//   };
//   val(){
//     return this.isNothing() ? "" : this.__value;
//   };
// }
// Maybe.of = (val) => new Maybe(val);
//
//
//
// const selectQuery = table => (where, params=[]) => order => limit => {
//
//   const whereClause = Maybe.of(where).map(w => `where ${w}`).val();
//   const orderClause = Maybe.of(order).map(o => `order by ${order}`).val();
//   const limitClause = Maybe.of(limit).map(l => `limit ${limit}`).val();
//
//   const sql = Maybe.of(`select * from ${table}`)
//                   .map(sql => `${sql} ${whereClause}`)
//                   .map(sql => `${sql} ${orderClause}`)
//                   .map(sql => `${sql} ${limitClause}`)
//                   .val();
//   return {sql: sql, params: params};
// };
// const albumQuery = selectQuery("albums");
// const albumSearch = title => albumQuery("title LIKE $1", `%${title}%`)();
// const rockAlbums = albumSearch("Rock");
// console.log(rockAlbums());
