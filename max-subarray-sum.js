/* 
 Sliding window pattern example
 Write a function called maxSubarraySum which accepts an array of integers
 and a number called n. The function should calculate the maximum sum of n
 consecutive elements in the array.
 */

// Naive approach O(N^2)
// slice is an inner loop
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let sum = -Infinity;

  for (let i = 0, j = i + n; j <= arr.length; i++, j++) {
    let subArray = arr.slice(i, j);
    let newSum = subArray.reduce((acc, current) => acc + current, 0);

    if (newSum > sum) {
      sum = newSum;
    }
  }

  return sum;
}

const sum = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
console.log(sum);

// Algorithm using sliding window
// As the sliding window moves one step, recalculate the new sum by
// subtracting left number and adding right number from the previous sum

function maxSubarraySum2(arr, n) {
  if (n > arr.length) {
    return null;
  }

  var i = 0;
  var j = i + n;
  let subArray = arr.slice(i, j);
  let previousSum = subArray.reduce((acc, current) => acc + current, 0);
  let sum = previousSum;

  // sliding window
  for (let i = 1, j = i + n; j <= arr.length; i++, j++) {
    let newSum = previousSum - arr[i - 1] + arr[j - 1];
    if (newSum > sum) {
      sum = newSum;
    }

    previousSum = newSum;
  }

  return sum;
}

const sum2 = maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4);
console.log(sum2);

// Proper sliding window pattern application
function maxSubarraySum3(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const sum3 = maxSubarraySum3([1, 2, 5, 2, 8, 1, 5], 4);
console.log(sum3);
