/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  let lowRegStr = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  if (reverseStr === lowRegStr) {
    return true
  }
  return false;

}

module.exports = permutationPalindrome;