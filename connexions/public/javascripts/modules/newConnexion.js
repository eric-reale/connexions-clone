import axios from 'axios';
import { $ } from './bling';

function newConnexion(e) {
  e.preventDefault();
  // console.log('here')
  // console.log(e.target);
  const form = e.target;
  const input = form.querySelector('input');
  // console.log(input.value)
  // console.log(this.action);

  axios
    .post(this.action, {
      name: input.value
    })
    .then(res => {

    })
    .catch(console.error);
};

export default newConnexion;
