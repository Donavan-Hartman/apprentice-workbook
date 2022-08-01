// Write a function that takes a string of one or more words as an argument
// and returns the same string, 
// but with all five or more letter words reversed. 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    let wordArr = [];
    let tempWord = "";
    for (let i = 0; i < str.length; i++) {
        let curLetter = str[i];
        let isLastLetter = str.length - 1 == i;
        if (curLetter !== ' ' && !isLastLetter) {
            tempWord += curLetter;
        } else if (isLastLetter) {
            tempWord += curLetter;
            wordArr.push(tempWord);
        } else {
            wordArr.push(tempWord);
            tempWord = "";
        }
    }
    let output = "";
    for (let x = 0; x < wordArr.length; x++) {
        var curWord = wordArr[x];
        let lastLetter = wordArr.length - 1 == x;
        if (curWord.length >= 5) {
            let reversedWord = "";
            for (let y = curWord.length - 1; y >= 0; y--) {
                var curLetter = curWord[y]
                reversedWord += curLetter;
            }
            if (curLetter !== ' ' && !lastLetter) {
                output += reversedWord + ' ';
            } else {
                output += reversedWord;
            }
        } else if (curWord.length < 5) {
            if (curLetter !== ' ' && !lastLetter) {
                output += curWord + ' ';
            } else {
                output += curWord;
            }
        }
    }
    return output;
}
