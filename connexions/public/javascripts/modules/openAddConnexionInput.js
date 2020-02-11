import axios from 'axios';
import { $ } from './bling';

const connexionInput = document.querySelector('.connexion-input');

let addNewConnexion;
let closeOut;
let allConnexions;

function displayNewConnexion(connexion) {
  // console.log(connexion);
  const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

  const sectionBody = document.querySelector('.section-body');
  const html = `
    <a class="section-body-connexion section-body-connexion-a" href="/connexions/${connexion._id}">
      <div class="connexion-image">
        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80">
      </div>
      <div class="connexion-info">
        <p class="connexion-name">${connexion.name}</p>
        <p class="connexion-circle-list">No circles yet!</p>
        <p class="connexion-logged">last logged: ${month}/${day}/${year}</p>
      </div>
      <div class="connexion-cirlces">
        <span></span>
      </div>
    </div>
  `;
  sectionBody.insertAdjacentHTML('afterbegin', html);
}

function closeDiv() {
  const section = document.querySelector('.add-new-connexion-section');
  section.classList.add('removed-item');
  section.remove();
}

function openAddConnexionInput() {
  const sectionBody = document.querySelector('.section-body');
  const html = `
    <div class="add-new-connexion-section">
      <form class="add-new-connexion" method="POST" action="/connexions/add">
        <input class="add-new-connexion-input" type="text" name="name">
        <button class="add-new-connexion-button" type="submit" value="add">Add</button>
        <button class="close-out" type="submit" value="add">Close</button>
      </form>
    </div>
  `;
  sectionBody.insertAdjacentHTML('afterbegin', html);

  const closeOutButton = document.querySelector('.close-out');
  closeOutButton.on('click', closeDiv);

  addNewConnexion = document.querySelector('.add-new-connexion');
  addNewConnexion.on('submit', newConnexion);
};

function newConnexion(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input');
  let addedConnexion;

  axios
    .post(this.action, {
      name: input.value
    })
    .then(res => {
      // console.log(res.data)
      addedConnexion = res.data;
      displayNewConnexion(addedConnexion);
    })
    .catch(console.error);
  closeDiv();
  // displayNewConnexion(addedConnexion);
};


if (connexionInput) {
  connexionInput.on('click', openAddConnexionInput);
};

// export default openAddConnexionInput;
export * from './openAddConnexionInput';
