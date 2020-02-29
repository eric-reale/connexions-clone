const deleteConnexionButton = document.querySelector('#delete-connexion')

// function setUpDeleteButton() {
//   const connexionsDivs = document.querySelectorAll('.section-body-connexion');
//   connexionsDivs.forEach(div => div.classList.add('connexion-list-width'));
// }

var modal = document.getElementById('modal-delete');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openDeleteModal() {
  modal.style.display = 'block';
}

if (deleteConnexionButton) {
  deleteConnexionButton.addEventListener('click', openDeleteModal);
}

export * from './deleteConnexions';
