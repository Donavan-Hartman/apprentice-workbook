// Create a function that takes in an initial word and filters out an array 
// to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    let wordArr = [];
    for (x = 0; x < words.length; x++){
      const curWord = words[x]; 
      let same = true;
      for (y = 0; y < initial.length; y++){
        const curWordLetter = curWord[y];
        const curInitialLetter = initial[y];
        if (curWordLetter != curInitialLetter) {
          same = false;
        }
      }
      if (same) {
        wordArr.push(curWord);
      } 
    }
    return wordArr;
}




