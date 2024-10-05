/*

Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(value1, value2) {
  let map1 = buildFrequencyMap(value1);
  let map2 = buildFrequencyMap(value2);

  let map1Keys = Object.keys(map1);
  let map2Keys = Object.keys(map2);

  if (map1Keys.length !== map2Keys.length) {
    return false;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}

function buildFrequencyMap(value) {
  let map = {};

  while (value !== 0) {
    let digit = value % 10;
    map[digit] = (map[digit] || 0) + 1;

    value = Math.floor(value / 10);
  }

  return map;
}

let result = sameFrequency(12234, 32241);
console.log(result);

// Alternate solution

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
