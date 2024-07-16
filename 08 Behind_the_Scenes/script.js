'use strict';

///////////////////////////////////////
// Scoping in Practice
/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge(); */

///////////////////////////////////////
// Hoisting and TDZ in Practice
/* 
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

///////////////////////////////////////
// The this Keyword in Practice
/* 
console.log(this); // Window

const calcAge = function (birthYear) {
  console.log(this); // Undefinded
};
calcAge(1998);

const arrowAge = birthYear => {
  console.log(this); // windows por que usa el this del padre
};
arrowAge(1998);

const jonas = {
  name: 'carlos',
  calAge: function () {
    console.log(this); // El objeto de donde se esta llamando
  },
};
jonas.calAge();

const matilda = {
  name: 'matilda',
};
matilda.calAge = jonas.calAge;
matilda.calAge(); */

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

/* const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);

    const isMillenial = () => {
      console.log(this); // En este caso si toma el objeto por que es el del padre
    };
    isMillenial();
  },

  greet: () => {
    console.log(this); // Toma el del scope padre en este caso el windows
  },
};
jonas.calcAge();
jonas.greet(); // NO USAR ARROW FUNCITION COMO METODOS

// arguments keyword
console.log('**********************');
const addExpr = function (a, b) {
  console.log(arguments); // Devuelbe los parametros que se envian
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // No existen arguments
  return a + b;
};
addArrow(2, 5); */

///////////////////////////////////////
// Objects vs. primitives
/* let age = 30;
let oldAge = age; // La igualdad copia el valor de la memoria
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me; // La igualdad pasa la referencia en memoria si se afectan
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
 */
///////////////////////////////////////
// Primitives vs. Objects in Practice

/* // Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {}; */

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // Asigna lo de un objeto a otro cope lo de uno a uno vacio, solo funciona con el primer nivel no con el arreglo que esta en el segundo
jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

jessica2.family.push('Mary');
jessica2.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
