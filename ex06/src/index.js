function multiplyArrayFunction(myArray) {
  var sum = 0;
  var product = 1;

  for (i = 0; i < myArray.length; i++) {
    let arreyItem = myArray[i].length;

    if (arreyItem > 1) {
      let subArr = myArray[i];

      for (k = 0; k < subArr.length; k++) {
        sum += Number(subArr[k]);
        product *= Number(subArr[k]);
      }
    } else {
      sum += Number(myArray[i]);
      product *= Number(myArray[i]);
    }
  }
  var arr = [product, sum];
  return arr;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
);
module.exports = multiplyArrayFunction;
