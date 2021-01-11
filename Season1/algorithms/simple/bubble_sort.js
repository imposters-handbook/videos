const list = [23,4,42,15,16,8];
const bubbleSort = (list) => {
  var doItAgain = false;
  const limit = list.length;
  const defaultNextVal = Number.POSITIVE_INFINITY;
  for (var i = 0; i < limit; i++) {
    let thisValue = list[i];
    let nextValue = i + 1 < limit ? list[i+1] : defaultNextVal;
    if(nextValue < thisValue){
      list[i] = nextValue;
      list[i+1] = thisValue;
      doItAgain = true;
    }
  }
  if(doItAgain) bubbleSort(list);
}
bubbleSort(list);
console.log(list);
