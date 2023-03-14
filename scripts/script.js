function openModal(evt) {
  document.querySelector('.modal-container').classList
    .add('modal-container-open');
  return false;
}

function closeModal() {
  document.querySelector('.modal-container').classList
    .remove('modal-container-open');
  return false;
}
