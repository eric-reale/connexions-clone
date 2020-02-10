import '../sass/style.scss';

import { $, $$ } from './modules/bling';
// import newConnexion from './modules/newConnexion';
// import addConnexionInput from './modules/openAddConnexionInput';

import getTabular from './modules/singlePageTab';
import connexionProperties from './modules/displayConnexionProperties';

import * as connexionsNew from './modules/openAddConnexionInput';


window.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-underlined');
  if(tabs.length > 0) {
    tabs.forEach(tab =>  {
      tab.addEventListener('click', getTabular)
    });
  }
})

// window.addEventListener('DOMContentLoaded', connexionProperties(connexion));



// const connexionInput = document.querySelector('.connexion-input');
// connexionInput.on('click', addConnexionInput);

// let addNewConnexion;
// // const addNewConnexion = document.querySelector('.add-new-connexion');
// if(addNewConnexion) {
//   addNewConnexion.on('submit', newConnexion);
// }


