// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

var solution = function (firstArr, secondArr) {
  let absValueDifference = [];

  for (let i = 0; i < firstArr.length; i++) {
    absValueDifference.push(
      Math.abs(firstArr[i] - secondArr[i]) *
        Math.abs(firstArr[i] - secondArr[i])
    );
  }
  let average =
    absValueDifference.reduce((a, b) => a + b, 0) / absValueDifference.length;
  return average;
};

console.log(myFunction([10, 20, 10, 2], [10, 25, 5, -2]));
