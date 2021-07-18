
function permutationPalindrome(word) {
  //put it into a map object
  const wordArray = word.toLowerCase().split("");
  const wordMap = new Map();

  wordArray.forEach((letter) => {
    if (wordMap.has(letter)) {
      wordMap.set(letter, wordMap.get(letter) + 1)
    } else {
      wordMap.set(letter, 1)
    };
  })
  //validate the map
  let count = 0;

  wordMap.forEach((value, letter) => {
    //count number of times the value is odd
    if (value % 2 === 1) {
      count += 1;
    }
  })

  if (count > 1) {
    //if more than once THEN false
    return false
  };

  if (count === 1 && wordArray.length % 2 === 0) { //checking if length is even
    //if odd count = 1, then is the number of characters odd
    //if falsy THEN false
    return false
  }
  //true
  return true;
}

module.exports = permutationPalindrome;