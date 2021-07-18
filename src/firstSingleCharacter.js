/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const wordArray = word.toLowerCase().split("");
  const wordMap = new Map();

  wordArray.forEach((letter) => {
    if (wordMap.has(letter)) {
      wordMap.set(letter, wordMap.get(letter) + 1)
    } else {
      wordMap.set(letter, 1)
    };
  })

  wordMap.forEach((letter) => {
    if (wordMap.get(letter) === 1) {
      return letter;
    }
  })
  return null;
}

module.exports = firstSingleCharacter;
