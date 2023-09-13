'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuestMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {

  const guessingNumber = Number(document.querySelector('.number-input').value)
  
  // No input
  if (!guessingNumber ) {
    displayGuestMessage('Input some number!');
    
    // Player win 
  } else if (guessingNumber === secretNumber) {
    displayGuestMessage("That's right!");
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "rgb(11, 155, 18)";
    document.querySelector('.question').style.width = '50rem';

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  // Number form input wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1 ) {
      document.querySelector('.guess-message').textContent = guessingNumber > secretNumber ? "Too much!" : "Not enough!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = "Game Over!";
      document.querySelector('.score').textContent = 0;
    }
  } 

});

document.querySelector('.again').addEventListener('click', () => {

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuestMessage('Start guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = "#000";

})