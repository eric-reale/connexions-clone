import '../sass/style.scss';

import { $, $$ } from './modules/bling';
// import newConnexion from './modules/newConnexion';
// import addConnexionInput from './modules/openAddConnexionInput';

import * as connexionsNew from './modules/openAddConnexionInput';


// const connexionInput = document.querySelector('.connexion-input');
// connexionInput.on('click', addConnexionInput);

// let addNewConnexion;
// // const addNewConnexion = document.querySelector('.add-new-connexion');
// if(addNewConnexion) {
//   addNewConnexion.on('submit', newConnexion);
// }

let allConnexions;
window.addEventListener('DOMContentLoaded', function() {
  allConnexions = document.querySelectorAll('.section-body-connexion');
});

