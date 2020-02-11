let newLabels;
let newInputs;

function connexionProperties() {
  const labelHTML = `
    <input class="connexion-attributes-categories-center new-label" placeholder="occupation, home town, etc.">
  `;
  const inputHTML = `
    <input class="connexion-attributes-answers new-inputs" type="text">
  `
  const form = document.querySelector('#update-connexion');
  form.insertAdjacentHTML('beforeend', labelHTML);
  form.insertAdjacentHTML('beforeend', inputHTML);
  grabLabelsInputs();
};

function updateInputName(e) {
  // console.log(e);

    newInputs.forEach(input => {
    console.log(input.previousElementSibling.value)
    input.name = 'test'
  });
}

function grabLabelsInputs() {
  newLabels = document.querySelectorAll('.new-label');
  newInputs = document.querySelectorAll('.new-inputs');


  if(newLabels) {newLabels.forEach(label => {
    label.addEventListener('keydown', function() {
      let input = label.nextElementSibling;
      console.log(input);
      console.log(label.value)
      input.name = `category[${label.value}]`;
    })
  })};
}



// if(newLabels) {newLabels.forEach(label => {
//   console.log(newLabels)
//   label.addEventListener('keydown', updateInputName)
// })};

export default connexionProperties;
