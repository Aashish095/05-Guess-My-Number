'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'guss kar yar🤷‍♀️🤷‍♀️';

document.querySelector('.number').textContent = '😍';
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(docum ent.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   const score = document.querySelector('.score').textContent;
  //when doestnot enter the word
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    //when you guess the element
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥇🥇winner!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //when you guess low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😒guess is to low....';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when you guess high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔guess is to high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
