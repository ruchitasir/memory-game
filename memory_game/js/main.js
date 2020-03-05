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
/*
const cards= ["queen","queen","king","king"]; 

let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " +cardOne);

let cardTwo = cards[2];
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
	}*/

// function assignemnt
/*
	const cards= ["queen","queen","king","king"]; 

	let cardsInPlay = [];
 function  checkForMatch(){
 	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} 
	else {
  		console.log("Sorry, try again.");
	}
 }


function flipCard(cardId)
{
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if(cardsInPlay.length ===2)
	{
		checkForMatch();
	}

}
 flipCard(0);
 flipCard(2); */

 // Objects assignment

const cards = [{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"}, 
{rank: "queen", suit:"diamonds", cardImage: "images/queen-of-diamonds.png"}, 
{rank: "king", suit:"hearts", cardImage: "images/king-of-hearts.png"}, 
{rank: "king", suit:"diamonds", cardImage: "images/king-of-diamonds.png"}]; 

let cardsInPlay = [];

function  checkForMatch(){
 	if (cardsInPlay[0] === cardsInPlay[1]) {
  		//console.log("You found a match!");
  		alert("You found a match!");

	} 
	else {
  		//console.log("Sorry, try again.");
  		alert("Sorry, try again.");
	}
 }

function flipCard(cardId)
{
	
	console.log("User flipped " + cards[cardId].rank);
	console.log("Card Image " + cards[cardId].cardImage);
	console.log("Suit " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	if(cardsInPlay.length ===2)
	{
		checkForMatch();
	}

}

 flipCard(0);
 flipCard(2);


















