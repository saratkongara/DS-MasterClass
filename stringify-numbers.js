/*
stringifyNumbers


Write a function called stringifyNumbers which takes in an object and 
finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

The exercise intends for you to create a new object
with the numbers converted to strings, and not modify the original. 
Keep the original object unchanged.
*/

function stringifyNumbers(obj) {
  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (Number.isInteger(value)) {
      const stringValue = value.toString();
      newObj[key] = stringValue;
    } else if (Array.isArray(value)) {
      newObj[key] = value;
    } else if (typeof value !== "object") {
      newObj[key] = value;
    } else {
      // object
      newObj[key] = stringifyNumbers(value);
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const newObj = stringifyNumbers(obj);
console.log(JSON.stringify(newObj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
