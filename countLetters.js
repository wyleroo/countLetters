
function countLetters (input) {
  var noSpaces = input.split(" ").join("");
  var finalCount = {};
  for (var i = 0; i < noSpaces.length; i++) {
    var character = noSpaces[i];
    if (finalCount[character]) {
      finalCount[character] += 1;
    } else {
      finalCount[character] = 1;
    }
  }
  return finalCount;
}

console.log(countLetters("lighthouse in the house"));