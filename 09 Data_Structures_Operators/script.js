'use strict';
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = code => code.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace(
      '_',
      ' '
    )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
  );
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/* ('use strict');

document.querySelector('#bntConvert').addEventListener('click', e => {
  const text = document.querySelector('#text').value;
  if (text.trim()) {
    const lines = text.trim().split('\n');
    for (const [i, word] of lines.entries()) {
      const [first, second] = word.trim().toLowerCase().split('_');
      const camelCase = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`.padEnd(5);
      console.log(`${camelCase}${'✅'.repeat(i + 1)}`);
    }
  } else {
    console.log('⚠ Empty Value');
  }
});
 */
/* const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // Puedes ponerle nombre a los atributos a partir del valor de una variable
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours, // Puedes aniadir un nuevo elemento a partir de una varible con el valor de la misma y su nombre como atributo

  // Ya no se necesitan la palabra funcion en los metodos
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
}; */
/* /////////////////////////////////////////////////
// STRINGS
const airline = 'Tab Air Portual';
const plane = 'A320';

console.log(plane[0]); // Un caracter en una posicion
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length); // Longitud de la cadena

console.log(airline.indexOf('r')); // El indice de un caracter en la cadena
console.log(airline.lastIndexOf('r')); //El ultimo indice de un caracter
console.log(airline.indexOf('Portual')); // Tambien funciona con otras cadenas

console.log(airline.slice(4)); // La subcadena que queda a partir del indice
console.log(airline.slice(4, 7)); // La subcadena que esta entre los indices

// Cambiar a minusculas y mayusculas
console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());
console.log(' sa  dfa '.trim()); // Quita los espacios de a principio o final

console.log('%324%'.replace('%', '$')); // Remplaza lo caracteres por otros tambien funciona con cadenas solo la primera coincidencia
console.log('%324%'.replace(/%/g, '$')); // Remplaza todas las coincidencias

console.log('Hola mundo'.includes('Hola')); // Si existe una cadena dentro de otra
console.log('Air a'.startsWith('Air')); // Si empieza con una cadena
console.log('Air a'.endsWith('a1')); // Si termina con una cadena

console.log('ad ada adfa'.split(' ')); // Divide una cadena por un caracter o cadena

console.log(['Hola', 'soy', 'IBMer'].join(' - ')); // Une un arreglo en una cadena que tiene entre cada elemento otra

console.log('123'.padStart(25, '+-')); // Pone al inicio una cadena un numero de veces
console.log('123'.padEnd(25, '+-')); // Lo mismo pero al final

console.log('---'.repeat(10)); // Repite una cadena */

/////////////////////////////////////////////////
// MAPS como los objetos pero las llaves pueden ser de cualquier tipo
/* 
const rest = new Map();
rest.set('name', 'Restaruant'); // Aniadir elementos y devuelve el mapa actual
rest.set(1, 'Firenze');
rest.set(true, 'Firenze');
console.log(rest);

// Obtener un elemento por key
console.log(rest.get('name'), rest.get(true));

// Comprobar si existe por key
console.log(rest.has('name'));

rest.delete(100); // Eliminar un elemento por key
console.log(rest);

console.log(rest.size); // Tamanio del map

const key = [1, 2];
rest.set(key, '123'); // La key en este caso es la direccion de memoria
console.log(rest.get(key));

/////////////////////////////////////////////////
console.log('PART 2');
const question = new Map([['question', 'jadskfjskljafl']]); // Array to Maop
console.log(question);

const objectEntries = Object.entries(openingHours); // Array to Map
const hourMap = new Map(objectEntries);
console.log(hourMap);

for (const [key, value] of hourMap) {
  // For
  console.log(key, value);
}

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/////////////////////////////////////////////////
// SETS Arreglos con valores unicos
/* const orderSet = new Set(['pasta', 'pizza', 'pizza', 'Risotto']);
console.log(orderSet);
console.log(orderSet.size); // Tamanio
console.log(orderSet.has('pizza')); // si tiene el valor
console.log(orderSet.has('123'));

orderSet.add('Garlic Bread'); // Aniadir un elemento
orderSet.add('Garlic Bread');

orderSet.delete('Risotto'); // Eliminar un elemento
orderSet.delete('123');

// orderSet.clear(); // Limpiar el set

console.log(orderSet);

for (const item of orderSet) {
  console.log(item);
}

// Otra forma de creacion
const set = [...new Set(['hola', 'mundo'])];
const set1 = new Set('string'); // Set de caracteres

console.log(set);
console.log(set1); */
/* // Obtener los nombres de los atributos de un objeto en un arreglo
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Obtener un arreglo de los valores de los atributos de un objeto
for (const values of Object.values(openingHours)) {
    console.log(values);
}

for (const iterator of Object.entries(openingHours)) {
  console.log(iterator); // Un arreglo con hambos las keys y los values
} */

/////////////////////////////////////////////////

/* console.log(restaurant?.openingHours?.mon?.open); // ?. Si existe lo anterior ejecuta lo siguiente si no undefined
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Tambien funciona con metodos
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderR?.(0, 1) ?? 'Method does not exist');
 */
/////////////////////////////////////////////////
/* // FOR OF
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  // Regresa el item del arreglo
  console.log(item);
}

for (const i in menu) {
  // Regresa las posiciones
  console.log(i);
}

console.log(menu);
console.log(menu.entries()); // Iterador

for (const [i, item] of menu.entries()) {
  console.log(i, item);
} */
/* /////////////////////////////////////////////////
// LOGICAL ASSIGMENT OPERATOR
const rest1 = {
  name: 'capri',
  numGuess: 20,
};

const rest2 = {
  name: 'La pizza',
  owner: 'Gio',
};

/* rest1.numberGuess = rest1.numGuess || 10;
rest2.numberGuess = rest2.numGuess || 10; */
/*
rest1.numGuess ||= 10;
rest2.numberGuess ||= 10;

rest1.numGuess ??= 10;
rest2.numberGuess ??= 10;

rest1.owner &&= 'ANONIMOUS';
rest2.owner &&= 'ANONIMOUS';

console.log(rest1);
console.log(rest2); */

/* /////////////////////////////////////////////
// THE NULLISH COALESCING OPERATOR ??
restaurant.numGuess = 0;
const guest = restaurant.numGuess || 10;
console.log(guest); // 10

// Nulish solo da falsos para null o undefined no con 0 o ''
// Funciona igual al or
const guestCorrect = restaurant.numGuess ?? 10;
console.log(guestCorrect); // 0 */

/////////////////////////////////////////////
/* // SHORT-CIRCUITING
// USE ANY DATA TYPE AND RETURN ANY DATA TYPE
// Comprueba el valor booleano de los valores y regresa el primer con valor true o el ultimo false
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log('///////////////////');
// Regresa el primer valor false o el ultimo valor true o tambien ejecuta la instruccion
console.log(0 && 'jonas'); // False => Regresa el primer valor falso
console.log(7 && 'jonas'); // True => Regresa el ultimo valor verdadero */

/////////////////////////////////////
/* // Rest patterns and Parameters
const arr = [1, 2, ...[3, 4]]; // SPREAD on rigth ...
const [a, b, ...others] = [1, 2, 3, 4, 5]; // ... on left asigna el resto a una vaible REST
console.log(a, b, others);

const { sat, ...weekdays } = restaurant.openingHours; // Tambien funciona con los objetos
console.log(weekdays);

// Tambien funciona con funciones
function add(...numbers) {
  console.log(numbers); // Lo convierte en un arreglo de los valores enviados separados
}
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);

add(...[23, 34, 53]); */

// Destructuring arrays
/* const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [q, p, r] = [8, 9];
console.log(q, p, r); // r => undefined */

/////////////////////////////////////
/* // Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Change names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Functionts
function destObject({ para1 = 0, para2, para3 }) {}
destObject({}); */

/////////////////////////////////////
/* // Operator ...
const arr = [7, 8, 9];
const badNewArr = [1, 2, ...arr]; // descompone/copia todo lo de un arreglo
console.log(arr);
console.log(badNewArr);

const str = 'jonas'; // ... descompone/copia una cadena en caracteres
const letters = [...str, ' ', 's.'];
console.log(letters);

const newRestaruant = { ...restaurant, founder: 'Guiseppe' }; // Tambien funciona con los objetos de igual manera, pero este si crea una copia
console.log(newRestaruant);

newRestaruant.name = 'a';
console.log(newRestaruant.name);
console.log(restaurant.name); */
