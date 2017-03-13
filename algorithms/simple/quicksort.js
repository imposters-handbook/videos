const list = [23,4,42,8,16,15];
const quickSort = (list) => {
  if(list.length < 2) return list;
  var left=[], right=[];
  const pivot = list.length -1;
  const pivotValue = list[pivot];
  list = list.slice(0,pivot).concat(list.slice(pivot + 1));
  for (var item in list) {
    item < pivotValue ? left.push(item) : right.push(item);
  }
  return quickSort(left).concat([pivotValue], quickSort(right));
};

console.log(quickSort(list));
