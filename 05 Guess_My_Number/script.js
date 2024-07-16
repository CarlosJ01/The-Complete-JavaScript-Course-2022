'use strict';

/* // Seleccionar un elemento como en css
console.log(document.querySelector('.message').textContent); // seleccionar el texto

// Set text
document.querySelector('.guess').value = 20; */

// Numero aleatorio
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

const setMessage = message =>
  (document.querySelector('.message').textContent = message);

// Aniadir el elemento click
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Si es cero (0=false) o si no es un numero
  if (!guess) {
    setMessage('🚫 No number!');
  } else if (score < 1) {
    return;
  } else {
    if (guess == secretNumber) {
      setMessage('🎉 Correct Number !');
      document.querySelector('.number').textContent = secretNumber;

      // Alterar el estilo
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // Highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;

      document.querySelector('.message').textContent =
        score == 0
          ? '💥 You lost the game !'
          : guess > secretNumber
          ? '📈 Too high !'
          : '📉 Too low !';
    }
  }
});

// Reset numbers
document.querySelector('.again').addEventListener('click', e => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
