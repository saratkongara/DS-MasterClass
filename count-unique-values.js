// Two Pointers pattern example
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be unique values in the array, but it will always be sorted.
// eg: countUniqueValues([-2,-1,-1,0,1]) => 4

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 0, j = 1; j < arr.length; i++, j++) {
    if (arr[i] !== arr[j]) {
      uniqueCount++;
    }
  }

  return uniqueCount;
}

let count = countUniqueValues([-2, -1, -1, 0, 1]);
console.log(count);
