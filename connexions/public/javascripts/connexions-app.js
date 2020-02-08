import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import newConnexion from './modules/newConnexion';

const addNewConnexion = document.querySelector('.add-new-connexion');
addNewConnexion.on('submit', newConnexion);
