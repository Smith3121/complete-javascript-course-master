'use strict';
/*
// PROJECT #1_ Guess My Number!. | JavaScript 🔥 | Lecture 064

console.log(document.querySelector('.message').textContent);

//Selecting and Manipulating Elements | JavaScript 🔥 | Lecture 066

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
