/* Write a function that takes a positive integer and return its factorial.
   The factorial of 0 is 1.
   the factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) *
   //  . . . . . . * 1 
   //(e.g. factorial of 3 is 3 * 2 * 1 = 6). */
module.exports = (num) => {
  
   let factorial = 1;
   for (let int = 1; int < num; int++) {
      factorial += factorial * int;
   }
  return factorial;
}






