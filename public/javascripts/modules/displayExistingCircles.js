const circleSectionDiv = document.querySelector('.my-circles');
const circleNameInput = document.querySelector('.new-circle-input');
let allOfTheCircles;

function generateCircleNameEvent(circles) {
  // console.log(circles);
  circles.forEach(circle => {
    circle.addEventListener('click', function(e) {
      const selectedCircle = e.currentTarget.textContent;
      circleNameInput.value = selectedCircle;
    })
  })
}

function createCircleHTML(array) {
  // console.log(array);
  let fixArray = [];
  array.forEach(arr => {
      fixArray.push(arr[0])
  });
  let html = fixArray.map(circle => {
    return `<div class="connexion-circle">${circle}</div>`
  });
  html = html.join('');
  circleSectionDiv.insertAdjacentHTML('afterbegin', html);
  allOfTheCircles = document.querySelectorAll('.connexion-circle');
  generateCircleNameEvent(allOfTheCircles);
}


function getCircleName(circles) {
    let myCircleArray = circles.map((circle) => {
      return [circle._id.circles]
  });
    // console.log(myCircleArray);
    createCircleHTML(myCircleArray);
}

export default getCircleName;
