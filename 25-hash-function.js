function hash(key, arrayLength) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }

  return total;
}

let result = hash("orangered", 11);
console.log(result);

result = hash("pink", 11);
console.log(result);
