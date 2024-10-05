/*
Write a recursive function called isPalindrome which returns true
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  //   if (str.length === 2) {
  //     return str[0] === str[1];
  //   }

  let firstAndLastSame = str[0] === str.charAt(str.length - 1);

  return firstAndLastSame && isPalindrome(str.substring(1, str.length - 1));
}

var result = isPalindrome("awesome"); // false
console.log(result);

result = isPalindrome("foobar"); // false
console.log(result);

result = isPalindrome("tacocat"); // true
console.log(result);

result = isPalindrome("amanaplanacanalpanama"); // true
console.log(result);

result = isPalindrome("amanaplanacanalpandemonium"); // false
console.log(result);
