/*
Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position,
it places small values into sorted position
*/

function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let smallestElementIndex = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[smallestElementIndex]) {
        smallestElementIndex = i;
      }
    }

    if (smallestElementIndex !== j) {
      swap(arr, j, smallestElementIndex);
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let sortedArray = selectionSort([23, 5, 16, 9, 12, 13, 29, 3, 8]);
console.log(sortedArray);
