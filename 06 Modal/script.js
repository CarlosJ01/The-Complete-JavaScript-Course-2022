'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// querySelector => solo selecciona el primero
// querySelectorAll => selecciona todos
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function (e) {
    console.log('Button clicked');
    // Quitar una clase
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = e => {
  console.log('Closed');
  // Añadir una clase
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Eventos del teclado
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('A key Escape was pressed');
    closeModal(e);
  }
});
