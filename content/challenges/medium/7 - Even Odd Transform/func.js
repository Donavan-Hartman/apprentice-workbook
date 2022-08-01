// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        if (curNum % 2 === 0) {
            newArray.push(curNum - (2 * n));
        } else {
            newArray.push(curNum + (2 * n));
        }
    }
    return newArray;
}