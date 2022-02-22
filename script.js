'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayHighscore = function (message) {
  document.querySelector('.highscore').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

const displayGuess = function (message) {
  document.querySelector('.guess').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // when there is no input
    // no value inserted then it becomes 0 and 0 is falsy value
    displayMessage('⛔ insert number between 1 and 20');
    // document.querySelector('.message').textContent =
    //   '⛔ insert number between 1 and 20';
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🎊🎉 Correct Number');
    // document.querySelector('.message').textContent = 'Correct Number';
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      //   document.querySelector('.highscore').textContent = highscore;
      displayHighscore(highscore);
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      //   document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage('🙊😖 You lost the game!');
      //   document.querySelector('.message').textContent = 'You lost the game!';
      //   document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';

  //       score--;

  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  //   document.querySelector('.number').textContent = '?';
  displayNumber('?');
  // document.querySelector('.guess').value = '';
  displayGuess('');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
