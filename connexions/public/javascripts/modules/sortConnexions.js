const sortButton = document.querySelector('#sort-button');
const sectionBodyDiv = document.querySelector('.section-body');

const circlesFunction = (connexion) => {
  const length = connexion.circles.length;
  let circleHTML;
  let eachCircleHTML;
  let circleArray = [];
  if (length === 0) {
    circleHTML = `<span class="no-circles-yet">No circles yet!</span>`;
  } else {
    for (let i = 0; i < length; i++) {
      eachCircleHTML= `<span class="circle"></span>`;
      circleArray.push(eachCircleHTML)
    }
    circleHTML = circleArray.join("");
  }
  return circleHTML;
}

function generateHTML() {
  let htmlArray = []
  connexions.forEach(connexion => {
    let location = (connexion.location !== undefined) ? connexion.location : "";
    let circles = circlesFunction(connexion);

    let newHTML = `<a class="section-body-connexion section-body-connexion-a"
              href="/connexions/${connexion._id}">
                <div class="connexion-image">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80">
                </div>
                <div>
                  <p class="connexion-name">${connexion.name}</p>
                  <p class="connexion-circle-list">${location}
                  </p>
                </div>
                <div class="connexion-circles">
                  ${circles}
                </div>
            </a>`
    htmlArray.push(newHTML)
  })
  return htmlArray.join("");
}

function alphabeticalMethod() {
  connexions.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
  sectionBodyDiv.innerHTML = "";
  let html = generateHTML();
  sectionBodyDiv.insertAdjacentHTML('afterbegin', html);
  sortButton.textContent = "created"
}

function createdByMethod() {
  connexions.sort((a,b) => a.created < b.created ? 1 : -1);
  sectionBodyDiv.innerHTML = "";
  let html = generateHTML();
  sectionBodyDiv.insertAdjacentHTML('afterbegin', html);
  sortButton.textContent = "circles"
}

function circleCount() {
  connexions.sort((a,b) => a.circles.length < b.circles.length ? 1 : -1);
  sectionBodyDiv.innerHTML = "";
  let html = generateHTML();
  sectionBodyDiv.insertAdjacentHTML('afterbegin', html);
  sortButton.textContent = "alpha"
}


function chooseSortMethod(e) {
  const text = e.currentTarget.textContent;
  switch (text) {
    case 'alpha' : alphabeticalMethod();
      break;
    case 'created' : createdByMethod();
      break;
    case 'circles' : circleCount();
      break;
    default: null;
      break;
  }
}

if (sortButton) {
  sortButton.addEventListener('click', chooseSortMethod);
}

export * from './sortConnexions';
