function accum(s) {
  let arr = s.split("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
  }

  return result.join("-");
}

accum("abcd");


//! Top Ranking Code Variation
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

//String Manipulation: The function takes a string s as an input. It uses the split("") method to break the string into an array of individual characters.

// Array Mapping: The map() function is used to transform each element of the array. It takes a function as an argument, which is applied to each element. The function provided to map() takes two arguments: the current element c and its index i.

// String Case Manipulation: The toUpperCase() and toLowerCase() methods are used to change the case of the string characters. The first character of each transformed element is made uppercase, and the rest are made lowercase.

// String Repetition: The repeat(i) method is used to repeat the lowercase character i times, where i is the index of the character in the original string.

// Array Joining: After the transformation, the join("-") method is used to combine all the elements of the array back into a single string, with each element separated by a hyphen.