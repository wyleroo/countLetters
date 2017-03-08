
function characterPositions (input) {
  var noSpaces = input.split(" ").join("");
  var positionList = [];
  for (var i = 0; i < noSpaces.length; i++) {
    var character = noSpaces[i];
    if (positionList[character]) {
      positionList[character].push(i);
    } else {
      positionList[character] = [i]
    }
  }
  return positionList;
}

console.log(characterPositions("lighthouse in the house"));