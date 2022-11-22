// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const seriesSum = (n) => {

    total = 0
    let i = 1
    let x = 4
    let sum = 1;
    let newTotal = sum; 
    
    if (n === 0) {
        return total.toFixed(2)
    } else if (n === 1) {
        total = total + 1
        return total.toFixed(2);
    } else {
        while (n > i) {
            let iterator = 1 / x;
            newTotal += iterator;
            x += 3
            i++
        }
    } return newTotal.toFixed(2)
}

console.log(seriesSum(5))