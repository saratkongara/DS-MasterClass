/*
reverse

Write a recursive function called reverse which accepts a string and 
returns a new string in reverse.
*/

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }

  return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
}

const result = reverse("rithmschool"); // 'loohcsmhtir'
console.log(result);
