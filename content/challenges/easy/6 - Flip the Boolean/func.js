// Create a function that reverses a boolean value and 
//returns the string "boolean expected" 
//if another variable type is given
module.exports = (bool) => {
    if (typeof bool === "boolean") {
        return !bool;
    } else {
        return "boolean expected";
    }
}
