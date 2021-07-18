
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

  let desiredLetter = null;

  wordMap.forEach((value, letter) => {
    if (value === 1) {
      if (desiredLetter === null) {
        desiredLetter = letter;
      }
    }
  })
  return desiredLetter;
}

module.exports = firstSingleCharacter;
