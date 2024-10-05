/*
In each pass through the array, the larger values bubble to the top/end.
In the first pass, the largest value goes to the end, then the next largest value and so on.
It is called bubble sort, as larger values bubble towards the top/end.
*/
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = len - 1; i >= 0; i--) {
    let noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let sortedArray = bubbleSort([23, 5, 16, 9, 12, 13, 29, 3, 8]);
console.log(sortedArray);
