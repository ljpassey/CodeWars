// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer

// Create a function that takes a number as an argument and returns a string of roman numerals in descending order.
function solution(num) {
  // Create an object with roman numerals as keys and their corresponding number as values.
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  // Create an empty string.
  var str = "";
  // Loop through the object's keys and assign each key to a variable called i.
  for (var i of Object.keys(roman)) {
    // Divide the number argument by the value of the key and round down.
    var q = Math.floor(num / roman[i]);
    // Subtract the result of the division from the number argument.
    num -= q * roman[i];
    // Add the key repeated the number of times of the result of the division to the empty string.
    str += i.repeat(q);
  }
  // Return the string of roman numerals.
  return console.log(`${str}`);
}
