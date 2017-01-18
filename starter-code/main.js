console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour) {
//   alert ("You found a match!");
// } else {
//   alert ("Sorry, try again.");
// }

function createCards(numCards) {
  for(var i = 0; i < numCards; i++) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    var board = document.getElementById('game-board');
    board.appendChild(newCard);
  }
}

createCards(4);
