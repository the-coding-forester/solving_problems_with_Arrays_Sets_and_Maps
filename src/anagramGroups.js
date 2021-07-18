/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
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
