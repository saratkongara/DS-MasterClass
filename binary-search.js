function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement === value) {
      return middle;
    } else if (currentElement < value) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return -1;
}

const index = binarySearch(
  [2, 5, 9, 13, 18, 22, 29, 30, 34, 38, 43, 56, 70],
  66
);
console.log(index);
