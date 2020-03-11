import '../sass/style.scss';

import { $, $$ } from './modules/bling';

import getTabular from './modules/singlePageTab';
import connexionProperties from './modules/displayConnexionProperties';
import allCircles from './modules/allCircles';
import linksToCircles from './modules/addLinksToCircles';
import * as deleteConnexions from './modules/deleteConnexions';
import * as connexionsNew from './modules/openAddConnexionInput';
import * as sortConnexions from './modules/sortConnexions';
import renameLabelName from './modules/updateLabelName';

// if (circles) {
//   linksToCircles(circles);
// }
// if (window) {
//   console.log(window)
// }
// if(document){
//   console.log(document.title)
// }

const labelInputs = document.querySelectorAll('.connexion-attributes-categories-center');
// console.log(labelInputs);
if (labelInputs) {
  labelInputs.forEach(label => label.addEventListener('change', renameLabelName))
}


window.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-underlined');
  if(tabs.length > 0) {
    tabs.forEach(tab =>  {
      tab.addEventListener('click', getTabular)
    });
  }
})

// window.addEventListener('DOMContentLoaded', connexionProperties(connexion));

const newButtonCat = document.querySelector('.add-new-category-button')
if (newButtonCat) {
  newButtonCat.addEventListener('click', connexionProperties);
  }

window.addEventListener('DOMContentLoaded', function() {
  if (document.title === 'My Circles | Connexions!') {
    allCircles(circles);
    linksToCircles(circles);
  } else {
    return;
  }
});
