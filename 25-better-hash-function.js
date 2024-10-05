function hash(key, arrayLen) {
  const PRIME_MULTIPLE = 31;
  let total = 0;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key.charAt(i);
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME_MULTIPLE + value) % arrayLen;
  }

  return total;
}

let result = hash("orangered", 11);
console.log(result);

result = hash("pink", 11);
console.log(result);
