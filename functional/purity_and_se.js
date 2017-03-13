//purity: a function takes in what it needs, returns a value
//side effects: affecting the state of something outside the current function scope

//pure code
//easy to test and to debug
const squareIt = (num) => {
  return num * num;
};

//impure code
//not so easy... how is num set? Where?
var num = 2;
const squareItImpurely = () => {
  //changing num is a side effect
  return num * num;
};

const saveItem = (item) => {
  //working with a DB is a "necessary side effect"
  return db.saveItem(item);
}
