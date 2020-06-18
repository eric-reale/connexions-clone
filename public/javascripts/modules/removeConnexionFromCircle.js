import axios from 'axios';

function removeConnexionFromCircle(e, circle) {
  e.preventDefault();
  const connexionToRemove = e.target.parentElement;
  const connexionID = connexionToRemove.children[1].dataset.id;

  axios.post('/connexions/updateConnexionCircles', {
    id: connexionID,
    circle: circle
    })
      .then(res => {
      // console.log(res.data)
    })
      .catch(console.error);
  connexionToRemove.remove();
}

export default removeConnexionFromCircle;
