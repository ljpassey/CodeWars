// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers) {
//   let phoneNum = "(xxx) xxx-xxxx";

//   for (let i = 0; i < numbers.length; i++) {
//     phoneNum = phoneNum.replace("x", numbers[i]);
//   }
//   return phoneNum;
// }
// console.log(createPhoneNumber([3, 5, 6, 8, 7, 6, 8, 3, 1, 9]));

const createPhoneNumber = (num) => {
    let output = `(${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;
    return output
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// !Most common answer from other people:
// function createPhoneNumber(numbers) {
//   var format = "(xxx) xxx-xxxx";

//   for (var i = 0; i < numbers.length; i++) {
//     format = format.replace("x", numbers[i]);
//   }

//   return format;
// }