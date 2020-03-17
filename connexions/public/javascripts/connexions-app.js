import '../sass/style.scss';

import { $, $$ } from './modules/bling';

import getTabular from './modules/singlePageTab';
import * as connexionProperties from './modules/displayConnexionProperties';
import allCircles from './modules/allCircles';
import linksToCircles from './modules/addLinksToCircles';
import * as deleteConnexions from './modules/deleteConnexions';
import * as connexionsNew from './modules/openAddConnexionInput';
import * as sortConnexions from './modules/sortConnexions';
import renameLabelName from './modules/updateLabelName';
import removeConnexionFromCircle from './modules/removeConnexionFromCircle';

// if (circles) {
//   linksToCircles(circles);
// }
// if (window) {
//   console.log(window)
// }
// if(document){
//   console.log(document.title)
// }

window.addEventListener('DOMContentLoaded', function() {
  const removeFromCircle = document.querySelectorAll('.remove-line-circle');
  removeFromCircle.forEach(toRemove => {
    toRemove.addEventListener('click', (e) => removeConnexionFromCircle(e, circle));
  });
});

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



window.addEventListener('DOMContentLoaded', function() {
  if (document.title === 'My Circles | Connexions!') {
    allCircles(circles);
    linksToCircles(circles);
  } else {
    return;
  }
});
