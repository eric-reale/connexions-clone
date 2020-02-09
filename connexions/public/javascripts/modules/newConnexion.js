import axios from 'axios';
import { $ } from './bling';

function newConnexion(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input');

  axios
    .post(this.action, {
      name: input.value
    })
    .then(res => {

    })
    .catch(console.error);
};

export default newConnexion;
