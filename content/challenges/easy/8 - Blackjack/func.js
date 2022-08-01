// Create a function that takes an array of card numbers 
//and checks if the sum of their value exceeds 21. 
//If the sum exceeds 21, return true and 
//if the sum is under or equal to 21, return false. 
//Values of the cards are as follows:
// 2-10 are their value. J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, 
//so that if giving an ace a value of 11 causes you to lose 
//and 1 allows you to win, then go with 1.

module.exports = (cards) => {
    let newCard = {
        'A' : 1, 
        '2' : 2, 
        '3' : 3, 
        '4' : 4, 
        '5' : 5, 
        '6' : 6, 
        '7' : 7, 
        '8' : 8, 
        '9' : 9, 
        '10' : 10, 
        'J' : 10, 
        'Q' : 10, 
        'K' : 10 };
    
        return cards.reduce((a,c) => a + newCard[c], 0) > 21
    }