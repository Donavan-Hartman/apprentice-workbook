// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    for (let i = 0; i = int1 % int2; i++) {
        let remainder = int1 % int2;
        int1 = int2;
        int2 = remainder;
    }
    return int2;
}