function generateHashtag(str) {
  const newStr = str.split(" ").reduce((acc, word) => {
    if (word !== "") {
      acc += word[0].toUpperCase() + word.slice(1);
    }
    return acc;
  }, "");

  if (newStr.length >= 140 || newStr.length === 0) {
    return false;
  } else {
    return ("#" + newStr)
  }
}

console.log(generateHashtag(" "));
