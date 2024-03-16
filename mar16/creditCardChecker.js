function validate(n) {
  //convert to array
  let arr = Array.from(String(n), Number);
  //determine if the array is odd or even
  let start = arr.length % 2 === 0 ? 0 : 1;
  let doubledArr = arr.map((item, index) => {
    // Double every other item starting from the determined index
    return index % 2 === start ? item * 2 : item;
  });

  // If the doubled number is greater than 9, subtract 9
  doubledArr = doubledArr.map((item) => {
    return item > 9 ? item - 9 : item;
  });

  // Sum the array
  let sum = doubledArr.reduce((acc, item) => {
    return acc + item;
  }, 0);
  // If the sum is divisible by 10, return true
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validate(127994))
