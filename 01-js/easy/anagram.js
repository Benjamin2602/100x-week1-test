/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // let len1 = str1.length;
  // let len2 = str2.length;

  // if (len1 !== len2) {
  //   return false;
  // }

  let low1 = str1.toLowerCase();
  let low2 = str2.toLowerCase();

  let str1arr = low1.split("").sort();
  let str2arr = low2.split("").sort();

  let arr1str = str1arr.join("");
  let arr2str = str2arr.join("");

  if (arr1str === arr2str) {
    return true;
  } else {
    return false;
  }
}


module.exports = isAnagram;
