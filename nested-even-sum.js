/*
nestedEvenSum

Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.
*/

function nestedEvenSum(obj) {
  let sum = 0;

  for (let value of Object.values(obj)) {
    let isInteger = Number.isInteger(value);
    if (isInteger && value % 2 === 0) {
      sum += value;
    }

    if (typeof value === "object") {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

var result = nestedEvenSum(obj1); // 6
console.log(result);

var result = nestedEvenSum(obj2); // 10
console.log(result);
