function classPhotos(redShirtHeights, blueShirtHeights) {
  // sort arrays by height
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let blueBack = true;
  let redBack = true;
  // compare each item in array to other colors array and see if it is possible
  let numPassed = 0;
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] <= blueShirtHeights[i]) {
      redBack = false;
    }
    if (redShirtHeights[i] >= blueShirtHeights[i]) {
      blueBack = false;
    }
  }
  return blueBack || redBack;
}

const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirtHeights, blueShirtHeights));
