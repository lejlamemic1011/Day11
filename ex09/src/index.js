function myBouncer(arr) {
  for (i = 0; i < arr.length; i++) {
    if (
      arr[i] === false ||
      arr[i] === null ||
      Number.isNaN(arr[i]) ||
      arr[i] === 0 ||
      arr[i] == "" ||
      arr[i] === undefined
    ) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;
