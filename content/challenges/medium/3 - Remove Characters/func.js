// Create a function that takes a string, removes all "special" characters 
//(e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed 
// are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let newStr = "";
    const excludeList = ["!", "@", "#", "$", "%", "^", "&", "\\", "*", "(", ")"];
    for (let i = 0; i < str.length; i++) {
        var curChar = str[i];
        var isGoodChars = true;
        for (let x = 0; x < excludeList.length; x++) {
            let badChar = excludeList[x];
            if (curChar == badChar) {
                isGoodChars = false;
            }
        }
        if (isGoodChars) {
            newStr += curChar;
        }
    }
    return newStr;
}
