function getMiddle(s) {
  let middleIndex = s.length / 2;
  console.log(middleIndex);
  if (s.length === 1) {
    return s;
  } else if (s.length % 2 === 0) {
    console.log("even");
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    console.log("odd");
    return s.slice(Math.floor(middleIndex), Math.floor(middleIndex) + 1);
  }
}

console.log(getMiddle("A"));

//! Top Code Variation
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
