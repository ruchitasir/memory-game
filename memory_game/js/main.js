/*
// Intro to JS assignment

let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";

console.log("User flipped " +cardOne);
console.log("User flipped " +cardThree);
*/


// Control flow assignment

cards= ["queen","queen","king","king"]; 

cardsInPlay = [];

cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped " +cardOne);

cardTwo = cards[2];

cardsInPlay.push(cardTwo);
console.log("User flipped " +cardTwo);

if(cardsInPlay.length ===2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
}