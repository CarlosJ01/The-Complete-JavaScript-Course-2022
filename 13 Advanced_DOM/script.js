'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecionar un elemento
/* console.log(document.documentElement); // HTML entero
console.log(document.head); // Head
console.log(document.body); // Body */

/* const header = document.querySelector('.header'); // Obtener un elemento por clase
// Todos los elementos de una clase
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section---1'); // Por id

// Pot etiqueta
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn')); // Por clase

// Creating and insert elements
const message = document.createElement('div'); // Crear un elemento
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved funcionality and analytics';
message.innerHTML =
  'We use cookied for improved funcionality and analytics <button class="btn btn--close-cookie">Go it</button>';

// Lo cambia de lugar por que solo existe un elemento
// header.prepend(message); // Inserta como primer elemento
// header.append(message); // Inserta como ultimo elementos
// header.append(message.cloneNode(true)); // Inserta una copia
header.before(message); // Lo inserta atras de elemento
// header.after(message); // Lo inserta despues de elemento

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove(); // Eliminar el elemento
  message.parentElement.removeChild(message); // Eliminar el hijo de un elementoA
});

///////////////////////////////////////
// Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//Style se refiere al atributo en la etiqueta no el css
console.log(message.style.height);
console.log(message.style.backgroundColor);

// Asi se optiene el style del CSS que ajecta al elemento
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);

// Cambiar las propiedades
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Acceder a los atributos
console.log(logo.src);
console.log(logo.className); // class

logo.alt = 'Otra'; // Modificar los atributos

console.log(logo.getAttribute('alt')); // Get attribute
console.log(logo.getAttribute('designer')); // Si no existe es null
logo.setAttribute('company', 'Banklist'); // Set attributo

console.log(logo.src); // Complete
console.log(logo.getAttribute('src')); // Relative

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c'); // Intercambiar eleminar o add
logo.classList.contains('c');

// Don't use ajecta a todas las clases
console.log(logo.className);
logo.className = 'jonas'; */
///////////////////////////////////////
// Types of Events and Event Handlers
/* const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1); // Aniadir un evento

// Eliminar un evento se necesita la funcion original
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
 */

///////////////////////////////////////
// Event Propagation in Practice
/* const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// TODAS SE VAN A EJECUTAR POR QUE TODOS SON CLICK SOBRE LOS ELEMENTOS
// EMPIEZA DESDE EL EL MAS ABAJO HACIA ARRIBA
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //TARGET el elemento que lo lanzo y CURRENT el elemento actual
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}); */

/* document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault(); // Previene  el evento de defecto
    if (e.target.classList.contains('nav__link')) {
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Scroll
    }
  });
});
 */

///////////////////////////////////////
// DOM Traversing
/* const h1 = document.querySelector('h1');
console.log(h1);

// Going downwards => child
console.log(h1.querySelectorAll('.highlight')); // Seleccionar desde un elemento
console.log(h1.childNodes); // Todo lo que esta dentro
console.log(h1.children); // Todos los elementos hijos

h1.firstElementChild.style.color = 'white'; // Primer hijo
h1.lastElementChild.style.color = 'red'; // Ultimo hijo

// Going upwards => parents
console.log(h1.parentNode); // El elemento esta sobre el
console.log(h1.parentElement); // El elemento que es padre

// Obtener un elemento sobre el que sea padre o arriba de la jerarquia lo contrario a queryselector
h1.closest('.header').style.background = 'orange';
h1.closest('h1').style.background = 'black';

// Going sideways: siblings
console.log(h1.previousElementSibling); // Elemento hermano por arriba
console.log(h1.nextElementSibling); // Elemento hermado por debajo

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(e => {
  if (e !== h1) {
    e.style.transform = 'scale(0.5)';
  }
}); */

/* console.log(tabs);
console.log(tabsContainer);
console.log(tabsContent); */

/* tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
}); */

///////////////////////////////////////
// Menu fade animation
/* const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    console.log(this); // El valor enviado se guarda en this
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); // Enviar valores
nav.addEventListener('mouseout', handleHover.bind(1)); */

///////////////////////////////////////
// Sticky navigation
/* const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); */

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

// Funcion que se llama cada que se cumple lo observable
/* const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // Desde que punto de  vista en este caso la pantalla
  threshold: [0.1, 0.5], // Porcentaje de visibilida
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // A quien van a observar
 */
/* const header = document.querySelector('.header');
console.log(header);

const headerObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
headerObserver.observe(header); */

///////////////////////////////////////
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('beforeunload', e);
  // e.returnValue = '';
});
