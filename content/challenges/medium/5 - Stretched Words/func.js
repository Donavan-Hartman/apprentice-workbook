// Write a function that takes a string, 
// and returns a new string with any duplicate consecutive letters removed.
// Notes:
// Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let curLetter = word[i];
        let lastLetter = word[i - 1];
        if (curLetter != lastLetter) {
            newWord += curLetter;
        }
    }
    return newWord;
}

