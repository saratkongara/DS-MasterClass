function naiveStringSearch(str, substr) {
  let matchCount = 0;

  for (let i = 0; i < str.length; i++) {
    let matched = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        matched = false;
        break;
      }
    }

    if (matched) {
      matchCount++;
    }
  }

  return matchCount;
}

let result = naiveStringSearch("lorie loled", "lol");
console.log(result);
