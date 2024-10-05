/*
collectStrings

Write a function called collectStrings which accepts an object and
returns an array of all the values in the object that have a typeof string
*/

function collectStrings(obj) {
  let list = [];

  for (const value of Object.values(obj)) {
    console.log(`value: ${value}`);
    if (typeof value === "string") {
      list.push(value);
    } else if (Array.isArray(value)) {
      continue;
    } else if (typeof value === "object") {
      list = list.concat(collectStrings(value));
    }
  }

  console.log(`List: ${list}`);
  return list;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const list = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(list);
