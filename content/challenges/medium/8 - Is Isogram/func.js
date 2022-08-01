// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      let curLetter = str[i];
      for (let y = i + 1; y < str.length; y++) {
        let nextLetter = str[y];
        if (curLetter === nextLetter) {
          return false;
        }
      }
    }
    return true;
  }