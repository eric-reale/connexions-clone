function addLinksToCircles(circles) {
  // console.log(circles);
  const allCircles = document.querySelectorAll('.node > a');
  allCircles.forEach(node => {
    let nodeName = node.firstChild.textContent.split(":")[0];
    console.log(nodeName);
    node.setAttribute('href', `/connexions/circles/${nodeName}`);
  })
}

export default addLinksToCircles;
