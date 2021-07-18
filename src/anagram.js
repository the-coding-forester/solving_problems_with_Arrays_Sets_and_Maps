/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  const a1 = s1.toLowerCase().split("");
  const a2 = s2.toLowerCase().split("");

  if (a1.length !== a2.length) {
    return false;
  }
  const map1 = new Map();
  const map2 = new Map();
  a1.forEach((num) => {
    if (map1.has(num)) {
      map1.set(num, map1.get(num) + 1)
    } else {
      map1.set(num, 1)
    };
  });

  a2.forEach((num) => {
    if (map2.has(num)) {
      map2.set(num, map2.get(num) + 1)
    } else {
      map2.set(num, 1)
    };
  });

  if (map1.size !== map2.size) {
    return false;
  }
  let status = true;

  map1.forEach((value, entry) => {
    //The key is the second argument for the forEach method. Value is the first and can be ignored.
    if (!map2.has(entry)) {
      status = false
    }
    if (map1.get(entry) !== map2.get(entry)) {
      status = false
    }
  })
  return status;
}

module.exports = anagram;
