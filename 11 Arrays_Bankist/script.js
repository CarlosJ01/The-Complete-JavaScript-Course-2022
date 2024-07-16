'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}</div>
        <div class="movements__date">Today</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/* /////////////////////////////////////////////////
// MAP, FILTER AND REDUCE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// MAP => Pasa por cada elementos haciendo la funcion indicada y devolviendo un nuevo arreglo con los cambios
const moventsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(moventsUSD);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
);
console.log(movementDescriptions);

// FILTER => Filtra todos los elementos por una funcion y los que cumplen la funcion se asignan para crear un nuevo arreglo
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// REDUCE => pasa todos los elementos por una funcion para que estos se sumen con el el acumnulado como sumar todos los elementos, tambien se pasa el valor inicial del conatador, count toma un nuevo valor en cada iteraccion
console.log(movements);
const balance = movements.reduce(
  (count, current, i, arr) => count + current,
  0
);
console.log(balance);

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
});
console.log(max);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
console.log(movements);

// FIND => regresae el primer elemento que cumpla con la condicion
const a = movements.find(mov => mov < 0);
console.log(a);

// Encuentra el indice del primer elemento que cumpla la condicion
const b = movements.findIndex(mov => mov === 3000);
console.log(b);

// Comprueba una condicion por todos los elementos como un include personalizado
const c = movements.some(mov => mov === 'a');
console.log(c);

// Comprueba si todos los elementos cumplen una condicion
const d = movements.every(mov => typeof mov == 'number');
console.log(d);

// Pone todos los elementos en un solo array si existen arrays dentro de otros solo funciona en el primer nivel
const arr = [[1, 2, 3, [12, 13]], [4, 5, 6], 7, 8];
const e = arr.flat(); // Se puede pasar cuandot niveles va a usar
console.log(e);

// Convina map y flap pasando por el map y luego al resultado le pasa um flat
const f = accounts.flatMap(acc => acc.movements);
console.log(f);

// SORTING ARRAYS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // Ordena

console.log(movements.sort()); // Asendente

// Negaativo a, b
// Positivo b, a
console.log(movements.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))); // Personalizado
console.log(movements.sort((a, b) => (a > b ? -1 : b > a ? 1 : 0))); // Desendente
console.log(movements.sort((a, b) => a - b)); */

/////////////////////////////////////////////////
// SIMPLE ARRAYS METHODS
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// Obtenr un arreglo desde una posicion inical y/o final -1 (No afecta al original)
console.warn('Slice');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr);

console.warn('Splice');
// Splice lo mismo que slice pero este si le quita la parte al original, el segundo significa cuantos vamos a eliminar
// console.log(arr.splice(2));
console.log(arr.splice(1, 3));
console.log(arr);

// Reverse
console.warn('Reverse');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse()); // Invierte un arreglo

// Concat
console.warn('Concat');
const letters = arr.concat(arr2); // Unir 2 arreglos
console.log([...arr, ...arr2]);
console.log(letters);

// Join
console.warn('join');
console.log(letters.join(' - ')); // Crea una cadena de los elementos separados por una cadena */

/////////////////////////////////////////////////
// THE NEW METHODS
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // Obtener el valor en una posicion

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/

/////////////////////////////////////////////////
// FOREACH
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.warn('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  // Elemento, posicion y el arreglo sobre el que se esta trabajando
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // Valor, llave y mapa
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  // Valor, nombre = valor, set
  console.log(`${value}: ${value}`);
});
 */

///////////////////////////////////////////////////
/* const x = new Array(7); // Crear un arreglo de solo 7 posiciones vacias
console.log(x);

// x.fill(1); // Llena los vacions con 1
// console.log(x);

// x.fill(1, 3, 5);
// console.log(x);

x.fill(23, 4, 7); // Llena los espacios vacios de un indice a otro con un elemento
console.log(x);

const y = Array.from({ length: 7 }, () => 1); // Crear un arreglo con propiedades
console.log(y);

const z = Array.from({ length: 7 }, (item, i) => i + 1);
console.log(z);

// Crear un arreglo desde el html
const a1 = Array.from(document.querySelectorAll('.movements__value'), el =>
  Number(el.textContent.replace('€', '').replace(' ', ''))
);
console.log(a1);
 */

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
console.warn(dogs);
console.warn(dogs.slice());
const dogsSorted = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
