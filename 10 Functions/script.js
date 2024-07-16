'use strict';
/////////////////////////////////////////
/// DEFAULT PARAMETERS
/* const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1, // Valores default de las funciones ES5
    price = 199 * numPassengers
    ) {
        const booking = {
            flightNum,
            numPassengers,
            price,
        };
        console.log(booking);
        bookings.push(bookings);
    };
    
    createBooking('LH123');
    createBooking('LH123', 2);
    createBooking('LH123', 10, 800);
    console.log(bookings);    
*/

/////////////////////////////////////////
// VALUE VS REFERENCES
/* const flight = 'LH234';
const jonas = {
    name: 'jonas',
    passport: 4564658,
};

// Para los primitivos se pasan como copia hacia la funcion
// Los objetos se pasan la referencia por lo que los cambios si afectan
const checkIn = function (flightNum, passager) {
    flightNum = 'LH999';
    passager.name = 'Mr. ' + passager.name;

    if (passager.passport === 4564658) {
        alert('Check in');
  } else {
      alert('Wrong passport!');
    }
    
    console.warn(flightNum);
    console.warn(passager);
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas); */

/////////////////////////////////////////
// CALLBACK FUNTIONS

/* // First class functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str = '') {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higer-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // Nombre de la funcion por parametro
};
transformer('JavaScript is the best !', upperFirstWord);
transformer('JavaScript is the best !', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); // Hace runa funcion por cada uno de los elementos de la lista */

/* const great = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); // Conserva el valor de la original
  };
};

const greeterHey = great('Hey'); // Regresa una funcion que se puede usar
greeterHey('Jonas');
greeterHey('Steven');

great('Hello')('Jonas'); // Llama a ambas funciones

// Arrow Functions
const greeArr = greeting => name => console.log(`${greeting} ${name}`);
greeArr('Hi')('Jonas'); */

///////////////////////////////////////
// The call and apply Methods
/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
}; */
/* 
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
 */
/* const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book; */
// Does NOT work
// book(23, 'Sarah Williams');

/* // Call method
console.warn('Call method');
book.call(eurowings, 23, 'Sarah Williams'); // Lamar metodos fuera de sus objetos a traves de la asignacion de una variable, se pasa como primer argumeto el objeto que usara para el this
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper'); */

/* // Apply method
console.warn('Apply method');
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // Igual al call pero este resive como segundo un arreglo con los parametros que usara el metodo
console.log(swiss);

book.call(swiss, ...flightData); // Call tambien funciona asi con el ...
 */
///////////////////////////////////////
// THE BIND METHOD
/* const bookEW = book.bind(eurowings); // Como el call pero el nuevo metodo que se guarda ya usa el objeto pasado como copiar un metodo, sin tener que pasar el objeto cada vez
bookEW(23, 'Steven Willians');

const bookEW23 = book.bind(eurowings, 23); // Puedes los pasar parametros para que sean default
bookEW23('Carlos');

// With even listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(300)); */

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
/* const runOne = function () {
    console.log('This will never run again');
};
runOne(); */

/* // Se llama inmediatamente la funcion (IIFE)
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate); No se puede acceder

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var isPublic = 46;
}
// console.log(isPrivate); No se puede acceder
console.log(isPublic); */

///////////////////////////////////////
// CLOSURES
/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // Poder acceder al entorno de las varibles donde las funciones son creadas, tiene prioridasd sobre el scope chain
booker();
booker();
booker();
booker();
booker();

const booker1 = secureBooking();
booker1();

console.dir(booker); */

/* const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(function () {
  console.log('Timer');
}, 1000);

boardPassengers(180, 3); */

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'yellow';
    setTimeout(function () {
      header.style.color = 'red';
    }, 500);
  });
})();
