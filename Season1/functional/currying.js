const dateNight = (who, what, where) => {
  return `Out with ${who} having fun ${what} at ${where}`;
};

//curried, instead of one function with three args
//three functions with an arity of 1, chained together
const nightOut = what => who => where => {
  return `Out with ${who} having fun ${what} at ${where}`;
};
const dancing = nightOut("Dancing");
const dancingWithWife = dancing("wife");
const funTime = dancingWithWife("Club 9")
console.log(funTime);



















//
// const pgp = require('pg-promise')();
// const db = pgp("postgres://localhost/chinook");
//
// //curried function
// const nightOut = what => who => where => {
//   return `Out with ${who} having fun ${what} at ${where}`;
// }
// //partial application
// const dancing = nightOut("dancing");
// const dancingWithWife = dancing("wifey");
// const dateNight = dancingWithWife("Club 9")
// console.log(dateNight);
//
// //curried SQL
// const selectQuery = table => (where, params=[]) => order => limit => exec => {
//   const whereClause = where ? ` where ${where}` : "";
//   const orderClause = order ? ` order by ${order}` : "";
//   const limitClause = limit ? ` limit ${limit}` : "";
//   if(params.length > 0) params = [params];
//   const sql = `select * from ${table}${whereClause}${orderClause}${limitClause}`;
//   const query =  {sql: sql, params: params};
//   if(exec){
//     db.many(sql, params).then(res => exec(res)).catch(err => console.log(err))
//   }
//   else return query;
// };
// const albumQuery = selectQuery("album");
// const albumSearch = title => albumQuery("title LIKE $1", `%${title}%`)()();
// const rockAlbums = albumSearch("Rock");
// console.log(rockAlbums());
