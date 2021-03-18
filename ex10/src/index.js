function mySplice(arr1, arr2, n) {
  const newArray = arr2.slice();
  const newArrayRevers = arr1.reverse();
  newArray.splice(n, 0, ...newArrayRevers);

  return newArray;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
