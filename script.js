'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {

  const guessingNumber = Number(document.querySelector('.number-input').value)
  
  if (!guessingNumber ) {
    document.querySelector('.guess-message').textContent = 'Input some number!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = "That's right!";
  } else if (guessingNumber > secretNumber) {
    if (score > 1 ) {
      document.querySelector('.guess-message').textContent = "Too much!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = "Game Over!";
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = "Not enough!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = "Game Over!";
      document.querySelector('.score').textContent = 0;
    }
  }

});