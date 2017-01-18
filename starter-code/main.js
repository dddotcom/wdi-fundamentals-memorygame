var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

var score = 0;
var outcome = '---';
var result = document.getElementById('outcome');
var scoreText = document.getElementById('score');
var resetCardsButton = document.getElementById('resetCards');
var resetScoreButton = document.getElementById('resetScore');

function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    //create new card
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);

    //add to board
    board.appendChild(cardElement);
  }

  //set up reset buttons
  resetCardsButton.addEventListener('click', resetBoard);
  resetScoreButton.addEventListener('click', resetScore);
}

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  //flip the card
  if(this.getAttribute('data-card') === 'queen'){
    this.innerHTML = '<img src="images/queen.png" title="queen" alt="queen"/>';
  } else {
    this.innerHTML = '<img src="images/king.png" title="king" alt="king"/>';
  }

  //check for a match if two cards have been picked
  if(cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    result.innerHTML = outcome;
    scoreText.innerHTML = score + "";
    cardsInPlay = [];
  }
}

function isMatch(cardsInPlay) {
  var result = false;
  if(cardsInPlay[0] === cardsInPlay[1]) {
    outcome = "It's a match!"
    score++;
  } else {
    outcome = "Ooops, try again!";
  }
}

function resetBoard(){
  //reset the board
  var cards = document.getElementsByClassName('card');
  for(var i = 0; i < cards.length; i++){
    cards[i].innerHTML = "";
  }

  outcome = "---";
  result.innerHTML = outcome;
}

function resetScore(){
  score = 0;
  scoreText.innerHTML = score + "";
}

createBoard();
