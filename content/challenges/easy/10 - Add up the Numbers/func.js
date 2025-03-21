/* Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 
because 1 + 2 + 3 + 4 = 10. USE FOR LOOP */

module.exports = (num) => {
    let total = 0;
    for (let arg = 0; arg <= num; arg++) {
        total = total + arg;
    }
    return total;
}
