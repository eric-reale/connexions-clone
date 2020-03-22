const searchIcon = document.querySelector('#search-icon');
const searchBarArea = document.querySelector('.search-bar-area');
const logoSettings = document.querySelector('.logo-settings');
const logoTextAlign = document.querySelector('.logo-with-search');
const sectionBodyDiv = document.querySelector('.section-body');
let searchBarInput;


const circlesFunction = (connexion) => {
  const length = connexion.circles.length;
  let circleHTML;
  let eachCircleHTML;
  let circleArray = [];
  if (length === 0) {
    circleHTML = `<span class="no-circles-yet">No circles yet!</span>`;
  } else {
      let i = 0;
      while (i < length) {
          eachCircleHTML= `<span class="circle"></span>`;
          circleArray.push(eachCircleHTML)
          i++;
          if (i === 6) { // no more than 6 circles to be displayed
            break;
          }
        }
    circleHTML = circleArray.join("");
  }
  return circleHTML;
}

function generateHTML(connexions) {
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

function searchConnexions(e) {
  let searchValue = e.currentTarget.value.toUpperCase();
  let searchedConnexions = connexions.filter(connexion => {
    return connexion.name.toUpperCase().includes(searchValue);
    });
  // console.log(searchedConnexions)
  sectionBodyDiv.innerHTML = "";
  let html = generateHTML(searchedConnexions);
  sectionBodyDiv.insertAdjacentHTML('afterbegin', html);
}

function displaySearchInput() {
  if (searchBarInput) {
    return;
  }
  const inputHTML = `
    <input class="search-bar-input">
  `;
  searchBarArea.insertAdjacentHTML('afterbegin', inputHTML);
  logoSettings.classList.add('logo-settings-with-search');
  logoSettings.classList.remove('logo-settings');
  logoTextAlign.classList.add('logo-text-align');
  searchBarInput = document.querySelector('.search-bar-input');
  searchIcon.classList.add('active-search');
  searchBarInput.addEventListener('keyup', searchConnexions);
};

function removeSearchInput() {
  searchBarInput.remove();
  searchIcon.classList.remove('active-search');
  searchBarInput = '';
}

if(searchIcon) {
  searchIcon.addEventListener('click', function() {
    if (searchIcon.classList.contains('active-search')) {
      removeSearchInput();
       }
    else {
      displaySearchInput();
    }
  }
)}

export * from './searchConnexions';
