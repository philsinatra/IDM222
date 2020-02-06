const modal = document.getElementById('modal');

// Concept 1
/*
const btnModalOpen = document.getElementById('btn-modal-open');
const btnModalClose = document.getElementById('btn-modal-close');

const openModal = () => {
  modal.hidden = false;
};

const closeModal = () => {
  modal.hidden = true;
};

btnModalOpen.addEventListener('click', openModal, false);
btnModalClose.addEventListener('click', closeModal, false);
*/

// Concept 2
const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      modal.hidden = !modal.hidden;
    },
    false
  );
});
