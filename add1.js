function addUpTo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = new Date();
let total = addUpTo(2000000000);
let t2 = new Date();

console.log(`total: ${total}, time: ${(t2 - t1) / 1000}`);

let t3 = new Date();
let total2 = addUpTo2(2000000000);
let t4 = new Date();

console.log(`total: ${total2}, time: ${(t4 - t3) / 1000}`);
