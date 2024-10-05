/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)
Space - O(n)

Bonus:

Time - O(n log n)
Space - O(1)
*/

function areThereDuplicates(...arr) {
  let map = {};

  for (let value of arr) {
    if (map[value]) {
      return true;
    } else {
      map[value] = 1;
    }
  }

  return false;
}

const result = areThereDuplicates(1, 2, 3, 4, 5, 21);
console.log(result);

// Alternate solution - 1
function areThereDuplicates2(...arguments) {
  return new Set(arguments).size !== arguments.length;
}

// Alternate solution - 2
// Sort the array and then compare consecutive elements to find the duplicate if any

function areThereDuplicates3(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

const result3 = areThereDuplicates3(1, 2, 3, 4, 5, 2);
console.log(result3);
