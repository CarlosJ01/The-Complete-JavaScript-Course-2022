'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
///////////////////////////////////////
/* // Converting and Checking Numbers
console.log(23 === 23.0); // True Numbers son todos int and double

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // False

// Conversion
console.log(Number('23'));
console.log(+'23'); // Tambien se conbierten solo poniendo +''

// Parsing
console.warn('Parsing');
console.log(Number.parseInt('30px', 10)); // Numero y la base
console.log(Number.parseInt('e23', 16));
console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // Floats 2.5

// Check if value is NaN
console.warn('is NaN');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X')); // True
console.log(Number.isNaN(23 / 0)); // False -> infinito

// Checking if value is number
console.warn('is Finito');
console.log(Number.isFinite(20)); // True
console.log(Number.isFinite('20')); // False
console.log(Number.isFinite(+'20X')); // False
console.log(Number.isFinite(23 / 0)); // False -> infinito

console.warn('is Integer');
console.log(Number.isInteger(23)); // Si es entero
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0)); // False */

///////////////////////////////////////
// Math and Rounding
/* console.warn('Potencias');
console.log(Math.sqrt(25)); // Raiz cuadrada
console.log(25 ** (1 / 2)); // Potencias
console.log(8 ** (1 / 3));

console.warn('Max, Min, PI');
console.log(Math.max(...[5, 18, 23, 11, 2])); // Maximo de una serie
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // No importa el formato pero no lo pued convertir

console.log(Math.min(5, 18, 23, 11, 2)); // Minino de una serie

console.log(Math.PI * Number.parseFloat('10px') ** 2); // PI

console.warn('Trunc');
console.log(Math.trunc(Math.random() * 6) + 1); // Trunca los decimales a entero

// Rounding integers
console.warn('Rounding');
console.log(Math.round(23.3)); // Redondea un decimal .5 arriba
console.log(Math.round(23.5));

console.log(Math.ceil(23.3)); // Redondea siempre hacia arriba
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3)); // Redondea hacia abajo tambien funcionan cadenas
console.log(Math.floor('23.9'));

// Rounding decimals
console.warn('Fixed');
console.log((2.7).toFixed(0)); // Redondea dando un numero de decimales el resultada es cadena
console.log((2.1).toFixed(0));
console.log((2.3).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); */

///////////////////////////////////////
// The Remainder Operator
/* console.log(5 % 2); // Modulo
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514)); */
///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
/* const diameter = 287_460_000_000; // Se pueden separa los numeros con _
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1416;
console.log(PI);

console.log(Number('230_000')); // Solo se pueden convertir con parseIntA
console.log(parseInt('230_000')); */

///////////////////////////////////////
// Working with BigInt
/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // Maximo de numeros pierden presicion despues
console.log(2 ** 53 + 3);
const varBigInt = 2 ** 53 + 4;
console.log(varBigInt);
console.log(Number.MAX_SAFE_INTEGER <= varBigInt);

// Convertir a bigint
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n)); // MAth no funciona con big int

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num)); // Las operaciones solo funcionan entre con bigint

// Exceptions
console.log(20n > 15);
console.log(20n === 20); // se ditingen numbers y bigint
console.log(typeof 20n);
console.log(20n == '20'); // LAs cadenas si los ponen

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3); */

///////////////////////////////////////
// Creating Dates
/* const now = new Date(); // Crear un objeto fecha del dia de hoy
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41')); // A partir de otra fecha
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Anio, mes, dia, hora, minutos, segundos
console.log(new Date(2037, 10, 31));

console.log(new Date(0)); // Se pueden pasar los milisegundos
console.log(new Date(3 * 24 * 60 * 60 * 1000)); */

// Working with dates
/* const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // Dia
console.log(future.getDay()); // Dia de la semana
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // Estantar ISO
console.log(future.getTime()); // Tiempo en milisegundos

console.log(new Date(2142256980000));

console.log(Date.now()); // El tiempo actual en milisegundos

future.setFullYear(2040); // Set Valores
console.log(future); */

///////////////////////////////////////
// Operations With Dates
/* const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // Obtner los milisegundos

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // Las restas se pasan a milisegundos

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
 */

///////////////////////////////////////
// Operations With Dates
/* const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
 */
///////////////////////////////////////
// Internationalizing Dates
/* const now = new Date();

const options = {
  // Opciones de formato
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const now1 = new Intl.DateTimeFormat('en-US').format(now); // Dar formato depende de la region
const now2 = new Intl.DateTimeFormat('es-MX').format(now);
console.log(now);
console.log(now1);
console.log(now2);

const now3 = new Intl.DateTimeFormat('es-MX', options).format(now);
console.log(now3);

const locale = navigator.language; // Lenguaje de la region
console.log(new Intl.DateTimeFormat(locale, options).format(now));

///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options2 = {
  style: 'currency', // Estilo del numero tambien se pone otra propiedadA
  unit: 'celsius',
  currency: 'EUR',
};

console.log('US:      ', new Intl.NumberFormat('en-US', options2).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options2).format(num));

options2.style = 'unit';
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options2).format(num)
); */

///////////////////////////////////////
// Timers
//setTimeout
// Se efecuta una funcion despues de un tiempo determinado en milis se pueden pasar parametros
const pizzaTimmer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...['pinia', 'peperoni']
);
console.log('Waiting ... '); // Las lineas se siguen ejecutando

// setInterval
// La funcion se ejecuta cada cierta cantidad de tiempo en milis
/* setInterval(() => console.log(new Date()), 1000); */

clearTimeout(pizzaTimmer); // Limpiar / Eliminar el timer
