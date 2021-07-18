/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(word.length / 2);


  const arr = [];

  for (let index = 0; index < middle; index++) {
    arr.push(word[index]);
  }

  middle += word.length % 2 === 0 ? 0 : 1;

  for (let index = middle, limit = word.length; index < limit; index++) {
    if (word[index] !== arr.pop()) {
      return false;
    }
  }

  return true;

}

module.exports = permutationPalindrome;