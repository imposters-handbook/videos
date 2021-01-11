const list = [23,4,42,8,16,15];
const selectionSort = (list) => {
  for (var i = 0; i < list.length; i++) {
    var currentMinIndex = i;
    for(var x = currentMinIndex + 1; x < list.length; x++){
      if(list[x] < list[currentMinIndex]){
        currentMinIndex = x;
      }
    }
    if(currentMinIndex != i){
      var oldMinValue = list[i];
      list[i] = list[currentMinIndex];
      list[currentMinIndex] = oldMinValue;
    }
  }
  return list;
};
console.log(selectionSort(list));
