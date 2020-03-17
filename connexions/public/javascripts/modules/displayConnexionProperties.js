let newLabels;
let newInputs;
let removeLineInputs = document.querySelectorAll('.remove-line');
const newButtonCat = document.querySelector('.add-new-category-button')

function removeInputLine(e) {
  const x = e.currentTarget;
  const input1 = e.currentTarget.previousElementSibling
  const input2 = e.currentTarget.previousElementSibling.previousElementSibling
  x.remove();
  input1.remove();
  input2.remove();
}

function connexionProperties() {
  const labelHTML = `
    <input class=".connexion-attributes-categories connexion-attributes-categories-center new-label" placeholder="Job, hobby, etc.">
  `;
  const inputHTML = `
    <input class="connexion-attributes-answers-inputs new-inputs" type="text">
  `
  const x = `
  <a class="boxclose remove-line"></a>`
  const form = document.querySelector('#update-connexion');
  form.insertAdjacentHTML('beforeend', labelHTML);
  form.insertAdjacentHTML('beforeend', inputHTML);
  form.insertAdjacentHTML('beforeend', x);
  grabLabelsInputs();
};

function grabLabelsInputs() {
  newLabels = document.querySelectorAll('.new-label');
  newInputs = document.querySelectorAll('.new-inputs');

  if(newLabels) {newLabels.forEach(label => {
    label.addEventListener('keydown', function() {
      let input = label.nextElementSibling;
      input.name = `category[${label.value}]`;
    })
  })};
  removeLineInputs = document.querySelectorAll('.remove-line');
  removeLineInputs.forEach(x => x.addEventListener('click', removeInputLine))
}

if (removeLineInputs) {
  removeLineInputs.forEach(x => x.addEventListener('click', removeInputLine))
}

if (newButtonCat) {
  newButtonCat.addEventListener('click', connexionProperties);
  }


export default connexionProperties;
