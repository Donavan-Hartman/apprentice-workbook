// Create a function that takes in a word and determines whether or 
//not it is plural. ends in s
// Don't forget to return the result.
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

module.exports = (word) => {
    if (word[word.length-1] === 's'){
        return true;
        } else {
        return false;
        }
    }
