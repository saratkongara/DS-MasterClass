// Frequency Counter pattern example
function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let map1 = {};

  for (let char of word1) {
    map1[char] = (map1[char] || 0) + 1;
  }

  let map2 = {};

  for (let char of word2) {
    map2[char] = (map2[char] || 0) + 1;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}
