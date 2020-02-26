function addLinksToCircles(circles) {
  const allCircles = document.querySelectorAll('.node > a');
  allCircles.forEach(node => {
    console.log(node)
    // const a = document.createElement('a')
    // node.append(a);
    // node.lastChild.href = '/connexions'
    node.setAttribute('href', '/connexions');
  })
  // console.log('now here')
  // console.log(circles)
  // console.log('can i get a what what')

}

export default addLinksToCircles;
