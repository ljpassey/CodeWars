// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime
// number or not. A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Example: isPrime(5) should return true

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

