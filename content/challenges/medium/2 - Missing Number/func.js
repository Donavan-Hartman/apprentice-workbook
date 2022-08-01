// Create a function that takes an array of numbers between 1 and 10 
//(excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    for (let target = 1; target <= 10; target++) {
        var found; found = false;
        for (let x = 0; x < arr.length; x++) {
            let curnum = arr[x];
            if (target == curnum) {
                found = true;
            }  
        }  
        if (found != true) {
        return target;
        }
    } 
}