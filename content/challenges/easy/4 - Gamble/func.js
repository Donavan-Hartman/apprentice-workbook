// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: 
//net profit = probaliity * prize - cost of playing
// return ture if you think you can win
module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
return probabilityOfWinning * prize > costOfPlaying;
}

