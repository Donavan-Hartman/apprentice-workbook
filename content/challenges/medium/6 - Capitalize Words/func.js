// Create a function that takes a string as an argument 
// and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
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
    let upWords = "";
    for (let x = 0; x < wordArr.length; x++) {
        let curWord = wordArr[x];
        let lastWord = wordArr.length - 1 == x;
        upWords += curWord[0].toUpperCase() + curWord.slice(1);
        if (!lastWord){
            upWords += ' ';
        }
    }
    return upWords;
}