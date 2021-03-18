Function splitArrayInGroups(arr, n) {
  result = [];
  while (arr.length > n) {
    result.push(arr.splice(0, n));
  }
  if (arr.length) result.push(arr);
  return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroups;
