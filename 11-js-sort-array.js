function numberCompare(num1, num2) {
  return num1 - num2;
}

const sortedArray = [6, 4, 15, 10].sort(numberCompare);
console.log(sortedArray);
