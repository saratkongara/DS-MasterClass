/*
capitalizeFirst
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.

*/

function capitalizeFirst(arr) {
  let result = [];

  let str = arr[0];
  result.push(str[0].toUpperCase() + str.slice(1));

  if (arr.length === 1) {
    return result;
  }

  return result.concat(capitalizeFirst(arr.slice(1)));
}

const result = capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
console.log(result);
