/*
flatten
Write a recursive function called flatten which accepts an array of arrays and 
returns a new array with all values flattened.
*/

function flatten(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let first = arr[0];

  if (!Array.isArray(first)) {
    return [first].concat(flatten(arr.slice(1)));
  } else {
    return flatten(first).concat(flatten(arr.slice(1)));
  }
}

var result = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
console.log(result);

result = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
console.log(result);

result = flatten([[1], [2], [3]]); // [1,2,3]
console.log(result);

result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
console.log(result);

// Alternate solution

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
