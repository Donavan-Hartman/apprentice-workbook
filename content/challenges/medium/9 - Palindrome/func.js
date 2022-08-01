// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let curChar = str[i];
        reversedStr += curChar;
    }
    return str === reversedStr;
}
