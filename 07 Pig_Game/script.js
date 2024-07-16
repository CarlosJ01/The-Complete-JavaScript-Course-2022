'use strict';

const player1 = {
  score: 0,
  current: 0,
  active: true,
};

const player2 = {
  score: 0,
  current: 0,
  active: false,
};

let playing = true;

// Seleccionar por Id
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.getElementById('score--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const displayP1 = document.querySelector(`.player--0`);
const displayP2 = document.querySelector(`.player--1`);

const nameP1 = document.getElementById(`name--0`);
const nameP2 = document.getElementById(`name--1`);

const reset = () => {
  scoreP1.textContent = player1.score = 0;
  currentP1.textContent = player1.current = 0;
  player1.active = true;

  scoreP2.textContent = player2.score = 0;
  currentP2.textContent = player2.current = 0;
  player2.active = false;

  dice.classList.add('hidden');
  displayP1.classList.remove('player--winner');
  displayP2.classList.remove('player--winner');
  displayP1.classList.add('player--active');
  displayP2.classList.remove('player--active');
  playing = true;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  nameP1.textContent = 'PLAYER 1';
  nameP2.textContent = 'PLAYER 2';

  console.clear();
  console.log('Player 1', player1);
  console.log('Player 2', player2);
};

const changePlayer = (
  playerActive,
  playerInactive,
  currentDisplay,
  scoreDisplay = null,
  hold = false
) => {
  playerActive.active = false;

  if (hold) scoreDisplay.textContent = playerActive.score;

  currentDisplay.textContent = playerActive.current = 0;

  // Toggle remueve si esta y si no lo inserta
  displayP1.classList.toggle('player--active');
  displayP2.classList.toggle('player--active');

  playerInactive.active = true;

  console.log('Player 1', player1);
  console.log('Player 2', player2);
};

const hold = (
  playerActive,
  playerInactive,
  currentDisplay,
  scoreDisplay,
  displayPlayer,
  nameDisplay
) => {
  playerActive.score += playerActive.current;
  if (playerActive.score >= 100) {
    playing = false;
    // cambiar los atributos de un elemento
    btnRoll.disabled = true;
    btnHold.disabled = true;

    playerActive.current = 0;
    currentDisplay.textContent = 0;
    scoreDisplay.textContent = playerActive.score;

    displayP1.classList.remove('player--active');
    displayP2.classList.remove('player--active');
    dice.classList.add('hidden');

    displayPlayer.classList.add('player--winner');
    nameDisplay.textContent = 'Winner';

    console.log('WIN', playerActive);
  } else {
    changePlayer(
      playerActive,
      playerInactive,
      currentDisplay,
      scoreDisplay,
      true
    );
  }
};

btnRoll.addEventListener('click', e => {
  if (playing) {
    // Ramdom number
    const numberDice = Math.trunc(Math.random() * 6) + 1;
    console.log(numberDice);

    // Display dice
    dice.classList.remove('hidden');
    // Alterar el src del elemento
    dice.src = `dice-${numberDice}.png`;

    // Check for rolled 1: if true, switch to next player else add current
    if (numberDice === 1) {
      // Switch the player
      player1.active
        ? changePlayer(player1, player2, currentP1)
        : changePlayer(player2, player1, currentP2);
    } else {
      // Add dice to current player
      player1.active
        ? (currentP1.textContent = player1.current += numberDice)
        : (currentP2.textContent = player2.current += numberDice);
    }
  }
});

btnHold.addEventListener('click', e => {
  if (playing) {
    player1.active
      ? hold(player1, player2, currentP1, scoreP1, displayP1, nameP1)
      : hold(player2, player1, currentP2, scoreP2, displayP2, nameP2);
  }
});

btnNew.addEventListener('click', reset);

reset();
