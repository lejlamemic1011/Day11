var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(arr) {
  arr[2] = 6;
  var myItems = [...myArr];
  return myItems;
}

myArrayFunction(myArr);
console.log(myArrayFunction(myArr));

module.exports = myArrayFunction;
