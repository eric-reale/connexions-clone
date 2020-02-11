import '../sass/style.scss';

import { $, $$ } from './modules/bling';

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

const newButtonCat = document.querySelector('.add-new-category-button')
if (newButtonCat) {
  newButtonCat.addEventListener('click', connexionProperties);
  }
