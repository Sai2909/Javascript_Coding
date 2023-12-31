function mergeTwoArrayUniqueValues(firstArray, secondArray) {
  let add = [...firstArray, ...secondArray]; //spread operator

  if (firstArray.length == 0 && secondArray.length == 0) {
    return "empty array";
  }
  let unique = add.filter(function (value, index) {
    return add.indexOf(value) === index;
  });
  return unique;
}

console.log(mergeTwoArrayUniqueValues([1, 4, 4, 7], [1, 4, 6]));
