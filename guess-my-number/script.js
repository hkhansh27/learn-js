'use strict';
//This source code is still not DRY

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let tempScore = 0;
console.log(secretNumber);
const inputField = document.querySelector('input[type=number]');
const btnCheck = document.querySelector('.check');

const displayInfo = {
  message(value) {
    document.querySelector('.message').textContent = value;
  },
  number(value) {
    document.querySelector('.number').textContent = value;
  },
  score(value) {
    document.querySelector('.score').textContent = value;
  },
};

btnCheck.addEventListener('click', () => {
  const inputValue = inputField.value;
  //Check valid input
  if (inputValue === '' || inputValue < 1 || inputValue > 20) {
    displayInfo.message('Please enter the allowed number *required*');
  }
  // user wins
  else if (Number(inputValue) === secretNumber) {
    if (score >= tempScore) {
      tempScore = score;
    }
    document.querySelector('.highscore').textContent = tempScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayInfo.message('Correct !');
    displayInfo.number(secretNumber);
  }
  // user answers incorrectly
  else if (inputValue !== secretNumber) {
    score--;
    displayInfo.message(
      `${inputValue < secretNumber ? 'Too low' : 'Too high'}`
    );
    displayInfo.score && displayInfo.score(`${score > 0 ? score : 0}`);
    // score was negative, screen will display {lose, hide btn & input}
    if (score <= 0) {
      displayInfo.message('You lose');
      btnCheck.style.display = 'none';
      inputField.style.display = 'none';
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayInfo.message('Start guessing...');
  displayInfo.score(score);
  displayInfo.number('?');
  document.querySelector('body').style.backgroundColor = '#222';
  inputField.value = '';
  btnCheck.style.display = 'block';
  inputField.style.display = 'block';
});
