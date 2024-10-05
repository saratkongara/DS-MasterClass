function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentValue = arr[middle];

    if (num === currentValue) {
      return middle;
    } else if (num < currentValue) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

let result = binarySearch([1, 2, 3, 4, 5], 2); // 1
console.log(result);

result = binarySearch([1, 2, 3, 4, 5], 3); // 2
console.log(result);

result = binarySearch([1, 2, 3, 4, 5], 5); // 4
console.log(result);

result = binarySearch([1, 2, 3, 4, 5], 6); // -1
console.log(result);

result = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
console.log(result);

result = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
console.log(result);

result = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1
console.log(result);
