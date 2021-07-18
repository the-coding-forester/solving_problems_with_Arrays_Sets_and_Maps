
function anagramGroups(words) {
  const wordsObj = {};

  words.forEach((word) => {
    let tempArray = word.toLowerCase().split("");
    let sortedLetters = tempArray.sort().toString();

    if (!wordsObj[sortedLetters]) {
      wordsObj[sortedLetters] = [word];
    } else {
      wordsObj[sortedLetters] = [word, ...wordsObj[sortedLetters]];
    }
  })

  return Object.values(wordsObj);
}

module.exports = anagramGroups;
