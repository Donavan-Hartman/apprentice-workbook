// You are the cashier at a movie theater
// Only sell tickets under the following condition
// if the customer has enough money for a ticket 8$
// if the movie is not full (true or false)
// if the rating (PG, R) is R and the customer is 17 or older OR a parent is with them

// Return True or False in every situation
module.exports = (customerMoney, isMovieFull, rating, age, isParentWith) => {
    if (customerMoney >= 8 && !isMovieFull){
        if (rating != "R" || age >= 17 || isParentWith) {
            return true;
            }
        }
    return false;
}
