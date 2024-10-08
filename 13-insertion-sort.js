/*
Insertion sort

Builds up the sort by gradually creating a larger left half which is always sorted.
*/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

let result = insertionSort([2, 1, 9, 76, 4]);
console.log(result);
