function addLinksToCircles(circles) {
  const allCircles = document.querySelectorAll('.node > a');
  allCircles.forEach(node => {
    let nodeName = node.firstChild.textContent.split(":")[0];
    node.setAttribute('href', `/connexions/circles/${nodeName}`);
  })
}

export default addLinksToCircles;
