var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [];
  var averageDayTemp = [];

  for (i = 0; i < arr.length; i++) {
    newTemps = arr[i];
    var sum = 0;

    for (k = 0; k < newTemps.length; k++) {
      sum += newTemps[k];
    }

    var averageDayValue = sum / newTemps.length;
    averageDayTemp.push(averageDayValue);
  }
  return averageDayTemp;
}
myArrayFunction(temps);
console.log(myArrayFunction(temps));

module.exports = myArrayFunction;
